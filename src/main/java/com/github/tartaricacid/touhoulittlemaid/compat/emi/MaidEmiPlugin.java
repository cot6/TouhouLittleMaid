package com.github.tartaricacid.touhoulittlemaid.compat.emi;

import com.github.tartaricacid.touhoulittlemaid.compat.emi.altar.EmiAltarRecipeCategory;
import com.github.tartaricacid.touhoulittlemaid.compat.emi.altar.EmiAltarRecipeMaker;
import com.github.tartaricacid.touhoulittlemaid.compat.emi.transfer.BackpackRecipeHandler;
import com.github.tartaricacid.touhoulittlemaid.init.InitItems;
import com.github.tartaricacid.touhoulittlemaid.inventory.container.backpack.CraftingTableBackpackContainer;
import com.github.tartaricacid.touhoulittlemaid.inventory.container.backpack.FurnaceBackpackContainer;
import dev.emi.emi.api.EmiEntrypoint;
import dev.emi.emi.api.EmiPlugin;
import dev.emi.emi.api.EmiRegistry;
import dev.emi.emi.api.recipe.EmiRecipeCategory;
import dev.emi.emi.api.recipe.VanillaEmiRecipeCategories;
import dev.emi.emi.api.stack.EmiStack;
import net.minecraft.world.item.ItemStack;

import java.util.ArrayList;
import java.util.List;

@EmiEntrypoint
public class MaidEmiPlugin implements EmiPlugin {
    public static final EmiRecipeCategory ALTAR = new EmiAltarRecipeCategory();

    private static void registerAltarRecipeCategory(EmiRegistry registry) {
        registry.addCategory(ALTAR);
        registry.addWorkstation(ALTAR, EmiStack.of(InitItems.HAKUREI_GOHEI.get()));
        registry.addWorkstation(ALTAR, EmiStack.of(InitItems.SANAE_GOHEI.get()));

        EmiAltarRecipeMaker.registerAltarRecipes(registry);
    }

    // 用来隐藏过多的手办和坐垫
    private static void hideStacks(EmiRegistry registry) {
        List<ItemStack> groupItems = new ArrayList<>();
        groupItems.add(InitItems.GARAGE_KIT.get().getDefaultInstance());
        groupItems.add(InitItems.CHAIR.get().getDefaultInstance());

        // 先干掉所有手办和坐垫
        registry.removeEmiStacks(emiStack -> {
            ItemStack itemStack = emiStack.getItemStack();
            for (ItemStack groupItem : groupItems) {
                if (itemStack.is(groupItem.getItem()) && !ItemStack.matches(groupItem, itemStack)) {
                    return true;
                }
            }
            return false;
        });

        // 再各自添加一个回去
        for (ItemStack item : groupItems) {
            registry.addEmiStackAfter(EmiStack.of(item), emiStack -> emiStack.getItemStack().is(InitItems.POWER_POINT.get()));
        }
    }

    private static void registerRecipeHandlers(EmiRegistry registry) {
        registry.addRecipeHandler(CraftingTableBackpackContainer.TYPE, new BackpackRecipeHandler<>(VanillaEmiRecipeCategories.CRAFTING, 71, 9, 0, 70));
        registry.addRecipeHandler(FurnaceBackpackContainer.TYPE, new BackpackRecipeHandler<>(VanillaEmiRecipeCategories.SMELTING, 70, 1, 0, 70));
        registry.addRecipeHandler(FurnaceBackpackContainer.TYPE, new BackpackRecipeHandler<>(VanillaEmiRecipeCategories.FUEL, 71, 1, 0, 70));
    }

    @Override
    public void register(EmiRegistry registry) {
        registerAltarRecipeCategory(registry);
        registerRecipeHandlers(registry);
        hideStacks(registry);
    }
}