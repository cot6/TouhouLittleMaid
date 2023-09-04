package com.github.tartaricacid.touhoulittlemaid.client.renderer.entity.layer;

import com.github.tartaricacid.touhoulittlemaid.client.model.bedrock.BedrockModel;
import com.github.tartaricacid.touhoulittlemaid.client.renderer.entity.EntityMaidRenderer;
import com.github.tartaricacid.touhoulittlemaid.config.InGameMaidConfig;
import com.github.tartaricacid.touhoulittlemaid.entity.passive.EntityMaid;
import com.github.tartaricacid.touhoulittlemaid.item.BackpackLevel;
import com.mojang.blaze3d.vertex.PoseStack;
import com.mojang.math.Axis;
import net.minecraft.client.Minecraft;
import net.minecraft.client.renderer.MultiBufferSource;
import net.minecraft.client.renderer.entity.layers.RenderLayer;
import net.minecraft.client.renderer.texture.OverlayTexture;
import net.minecraft.world.item.ItemDisplayContext;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Vanishable;

public class LayerMaidBackItem extends RenderLayer<EntityMaid, BedrockModel<EntityMaid>> {
    private final EntityMaidRenderer renderer;

    public LayerMaidBackItem(EntityMaidRenderer renderer) {
        super(renderer);
        this.renderer = renderer;
    }

    @Override
    public void render(PoseStack matrixStack, MultiBufferSource bufferIn, int packedLightIn, EntityMaid maid, float limbSwing, float limbSwingAmount, float partialTicks, float ageInTicks, float netHeadYaw, float headPitch) {
        ItemStack stack = maid.getMaidInv().getStackInSlot(5);
        if (stack.getItem() instanceof Vanishable) {
            if (!renderer.getMainInfo().isShowBackpack() || !InGameMaidConfig.INSTANCE.isShowBackpack() || maid.isSleeping() || maid.isInvisible()) {
                return;
            }
            matrixStack.pushPose();
            matrixStack.mulPose(Axis.ZP.rotationDegrees(180.0F));
            matrixStack.mulPose(Axis.XP.rotationDegrees(180.0F));
            matrixStack.translate(0, 0.5, -0.25);
            switch (maid.getBackpackLevel()) {
                default:
                case BackpackLevel.EMPTY:
                    matrixStack.translate(0, 0.625, 0.2);
                    break;
                case BackpackLevel.SMALL:
                    matrixStack.translate(0, 0.625, -0.05);
                    break;
                case BackpackLevel.MIDDLE:
                    matrixStack.mulPose(Axis.XP.rotationDegrees(-7.5F));
                    matrixStack.translate(0, 0.625, -0.25);
                    break;
                case BackpackLevel.BIG:
                    matrixStack.translate(0, 0, -0.4);
                    break;
            }
            Minecraft.getInstance().getItemRenderer().renderStatic(maid, stack, ItemDisplayContext.FIXED, false, matrixStack, bufferIn, maid.level(), packedLightIn, OverlayTexture.NO_OVERLAY, maid.getId());
            matrixStack.popPose();
        }
    }
}