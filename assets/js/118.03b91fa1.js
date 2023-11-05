(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{397:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"女仆模型包详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#女仆模型包详解"}},[s._v("#")]),s._v(" 女仆模型包详解")]),s._v(" "),t("ul",[t("li",[s._v("本 wiki 适用于 Touhou Little Maid 模组 "),t("code",[s._v("1.12.2")]),s._v(" 和 "),t("code",[s._v("1.16.5")]),s._v(" 最新版；")]),s._v(" "),t("li",[s._v("需要了解原版 Minecraft 的资源包结构；")]),s._v(" "),t("li",[s._v("需要了解 JSON 格式；")]),s._v(" "),t("li",[s._v("当前仅支持 "),t("strong",[s._v("1.10.0 和 1.12.0 版本基岩版模型")]),s._v("；")]),s._v(" "),t("li",[s._v("对于文本编辑软件，我们推荐使用 "),t("code",[s._v("Visual Studio Code")]),s._v("，所有的文件都需要以 "),t("code",[s._v("UTF-8 无 BOM")]),s._v(" 编码保存。")])]),s._v(" "),t("h2",{attrs:{id:"模型包结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型包结构"}},[s._v("#")]),s._v(" 模型包结构")]),s._v(" "),t("p",[s._v("为了更好地理解如何创建模型包，我们在此列出了模型包的结构")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("模型包文件夹\n│\n├─pack.mcmeta\n├─pack.png\n└─assets\n    └─my_model_pack\n        ├─maid_model.json\n        ├─lang\n        │    ├─en_us.lang\n        │    └─zh_cn.lang\n        ├─models\n        │     └─entity\n        │            ├─cirno.json\n        │            └─daiyousei.json\n        └─textures\n                 └─entity\n                        ├─cirno.png\n                        └─daiyousei.png\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("h2",{attrs:{id:"模型包描述文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型包描述文件"}},[s._v("#")]),s._v(" 模型包描述文件")]),s._v(" "),t("p",[s._v("文件完整的结构如下，只有标记为“（必须）”的部分才是必须的，你不必填写所有内容。")]),s._v(" "),t("p",[s._v("模型支持带有注释的 JSON 文件，请酌情使用。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型包包名（必须）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pack_name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Touhou Project Model Packs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 作者列表")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"author"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TartaricAcid"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SuccinicAcid"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型包的描述文本")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Default Model Packs"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型包的版本")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型包的制作时间")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"date"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2019-07-14"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型包的图标，缺失此字段，材质包将没有图标")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"icon"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touhou_little_maid:textures/maid_icon.png"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型列表（必须）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_list"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型 id，不允许重复（必须）")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touhou_little_maid:hakurei_reimu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型所在的位置，使用完整的资源地址")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touhou_little_maid:models/entity/hakurei_reimu.json"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型所使用的材质位置，使用完整的资源地址")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"texture"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touhou_little_maid:textures/entity/hakurei_reimu.png"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 渲染成物品形态时的模型大小，默认为 1.0")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"render_item_scale"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 渲染成实体时的大小，范围为 0.2~2.0，默认为 1.0")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"render_entity_scale"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.75")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型名称")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Reimu Hakurei"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 该模型的描述文本")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Shrine Maiden of Hakurei"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 动画脚本，如果没有此字段，将会自动调用默认动画")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tlm-utils 插件会自动依据组名生成对应的动画脚本引用")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"animation"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touhou_little_maid:animation/maid.default.js"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br")])]),t("p",[s._v("上面的示例列出了所有可用字段，只需要带有“（必须）”的字段，其余部分可以省略。")]),s._v(" "),t("p",[s._v("为了简单起见，你可以写一个像这样的文件：")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型包包名（必须）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pack_name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Touhou Project Model Packs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型列表（必须）")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_list"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 模型 id，不允许重复（必须）")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touhou_little_maid:hakurei_reimu"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("如果我们不填写 "),t("code",[s._v("model")]),s._v(" 或 "),t("code",[s._v("texture")]),s._v("，它将基于 "),t("code",[s._v("model_id")]),s._v(" 选择默认的模型和材质。")]),s._v(" "),t("p",[s._v("比如上述案例中 "),t("code",[s._v("model_id")]),s._v(" 为 "),t("code",[s._v("touhou_little_maid:hakurei_reimu")]),s._v("，那么此时模型文件就为该资源域下的  "),t("code",[s._v("models/entity")]),s._v(" 文件夹下名为 "),t("code",[s._v("hakurei_reimu.json")]),s._v("  的文件，材质就为该资源域下的  "),t("code",[s._v("textures/entity")]),s._v(" 文件夹下名为 "),t("code",[s._v("hakurei_reimu.png")]),s._v(" 的文件。")]),s._v(" "),t("p",[s._v("如果我们书写了 "),t("code",[s._v("model")]),s._v(" 或者 "),t("code",[s._v("texture")]),s._v(" 字段，那么其内容并无限制，你甚至可以调用其他模型包中的模型，只需要书写对资源地址即可。")]),s._v(" "),t("h2",{attrs:{id:"动态图标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#动态图标"}},[s._v("#")]),s._v(" 动态图标")]),s._v(" "),t("p",[s._v("图标没有大小限制，支持静态图标和动态图标。")]),s._v(" "),t("p",[s._v("任意为 1:1 的图标均会被解析为静态图标。 不为 1:1 的长图，会以 0.1 秒的间隔逐次显示，从而形成动态图效果。")]),s._v(" "),t("blockquote",[t("p",[s._v("下图就为模组自带的图标，左侧被解析为静态图标，右侧被解析为动态图标")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/VoulqpR.png",alt:"020"}})]),s._v(" "),t("h2",{attrs:{id:"模型文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模型文件"}},[s._v("#")]),s._v(" 模型文件")]),s._v(" "),t("ul",[t("li",[s._v("本模组使用基岩版 "),t("code",[s._v("1.10.0")]),s._v(" 或 "),t("code",[s._v("1.12.0")]),s._v(" JSON 文件来进行模型的加载，该文件可以通过建模软件 "),t("a",{attrs:{href:"https://blockbench.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Blockbench"),t("OutboundLink")],1),s._v(" 直接导出，不需要对其做任何修改。")]),s._v(" "),t("li",[s._v("我们提供了许多预设动画，你只需要创建一个特殊名称的组，那么插件就会在导出模型是依据组名生成对应的动画脚本引用。 想要了解所有可用动画，请查看 "),t("RouterLink",{attrs:{to:"/preset_animation.html"}},[s._v("预设动画")]),s._v(" 篇章。")],1),s._v(" "),t("li",[s._v("模型也支持 JavaScript 自定义动画，你可以在自定义动画章节中找到对应介绍。")])]),s._v(" "),t("h2",{attrs:{id:"国际化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#国际化"}},[s._v("#")]),s._v(" 国际化")]),s._v(" "),t("p",[s._v("作为一个面向国际化的游戏，模型包的部分内容自然也兼容国际化。")]),s._v(" "),t("ul",[t("li",[s._v("模型包中的 "),t("code",[s._v("pack_name")]),s._v(" 和 "),t("code",[s._v("description")]),s._v(" 字段支持国际化；")]),s._v(" "),t("li",[s._v("模型列表的 "),t("code",[s._v("name")]),s._v(" 和 "),t("code",[s._v("description")]),s._v(" 字段支持国际化。")])]),s._v(" "),t("p",[s._v("国际化的添加方式很简单，只需要书写以 "),t("code",[s._v("{")]),s._v(" 开头，"),t("code",[s._v("}")]),s._v(" 结尾的字符串即可，中间部分为语言文件的 Key，而后书写对应语言文件即可。")]),s._v(" "),t("p",[s._v("比如我们书写了如下的内容（只截取了一小段）")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pack_name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{pack.vanilla_touhou_model.name}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{pack.vanilla_touhou_model.desc}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("而后在模型包资源域下的 "),t("code",[s._v("lang")]),s._v(" 文件夹下创建 "),t("code",[s._v("en_us.lang")]),s._v(" 文件，书写如下内容即可：")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("pack.vanilla_touhou_model.name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("Vanilla Touhou Model")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("pack.vanilla_touhou_model.desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("Default Model Packs")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("我们只添加了英文文件，如果还想再支持中文，创建 "),t("code",[s._v("zh_cn.lang")]),s._v(" 文件书写如下内容即可：")]),s._v(" "),t("div",{staticClass:"language-properties line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-properties"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("pack.vanilla_touhou_model.name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("原版东方资源包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("pack.vanilla_touhou_model.desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("默认的模型包")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("在前面的案例中，如果我们没有书写 "),t("code",[s._v("name")]),s._v(" 字段，那么系统会依据 "),t("code",[s._v("model_id")]),s._v(" 自动生成本地化 key，比如 "),t("code",[s._v("model_id")]),s._v(" 为 "),t("code",[s._v("touhou_little_maid:cushion")]),s._v("，那么生成的语言文件 key 为 "),t("code",[s._v("model.touhou_little_maid.cushion.name")]),s._v("。")]),s._v(" "),t("p",[t("code",[s._v("description")]),s._v(" 字段默认不生成，需要自行主动书写。")]),s._v(" "),t("h2",{attrs:{id:"兼容性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兼容性问题"}},[s._v("#")]),s._v(" 兼容性问题")]),s._v(" "),t("p",[s._v("鉴于部分作者制作的模型比较特殊，与女仆本身拥有多种附加的外形显示不兼容。 此处专门对非标模型提供了适配的做法：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[s._v("问题")]),s._v(" "),t("th",{staticStyle:{"text-align":"center"}},[s._v("解决方法")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("动画不协调")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("编写自定义 JavaScript 动画脚本")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("手臂持有物品位置不对")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("使用定位骨骼进行定位")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("禁止显示手部物品")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("只要 "),t("code",[s._v("armLeft")]),s._v(" 或者 "),t("code",[s._v("armRight")]),s._v(" 骨骼不存在，那么对应的手持物品就不会显示")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("背包位置不正确")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("使用定位骨骼进行定位")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[s._v("背包、拉杆箱、载具、扫帚，自定义头颅等位置兼容不对")]),s._v(" "),t("td",{staticStyle:{"text-align":"center"}},[s._v("采用如下书写关闭这些功能")])])])]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pack_name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Touhou Project Pack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_list"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touhou_little_maid:hakurei_reimu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"show_backpack"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阻止背包的显示")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"show_custom_head"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阻止女仆显示自定义头颅")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"show_hata"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阻止旗指物的显示，在 1.16 中弃用")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"can_hold_trolley"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阻止女仆持有拉杆箱，在 1.16 中弃用")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"can_hold_vehicle"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阻止女仆持有载具，在 1.16 中弃用")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"can_riding_broom"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 阻止女仆骑乘扫帚，在 1.16 中弃用")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"女仆彩蛋"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#女仆彩蛋"}},[s._v("#")]),s._v(" 女仆彩蛋")]),s._v(" "),t("p",[s._v("我们添加了女仆命名彩蛋功能，特殊命名的女仆可以直接调用特定模型。")]),s._v(" "),t("p",[s._v("彩蛋的书写方式非常简单，模组会自动识别其为彩蛋模型，也不会出现在皮肤选择界面。")]),s._v(" "),t("h3",{attrs:{id:"普通彩蛋"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#普通彩蛋"}},[s._v("#")]),s._v(" 普通彩蛋")]),s._v(" "),t("p",[s._v("如下为普通命名彩蛋的书写方式。 普通命名彩蛋下，女仆只需要命名为下面 "),t("code",[s._v("tag")]),s._v(" 字段，就会调用该模型。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pack_name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Touhou Project Model Pack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_list"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touhou_little_maid:hakurei_reimu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"easter_egg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IKUN~"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"加密彩蛋"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加密彩蛋"}},[s._v("#")]),s._v(" 加密彩蛋")]),s._v(" "),t("p",[s._v("如下为加密彩蛋的书写方式。 加密彩蛋彩蛋下，女仆需要特定命名，该命名的 SHA-1 值为如下的 "),t("code",[s._v("tag")]),s._v(" 字段，才会调用该模型。")]),s._v(" "),t("p",[s._v("如下书写方式，当女仆命名为 "),t("code",[s._v("IKUN~")]),s._v(" 时，因为这个字符的 SHA-1 值为 "),t("code",[s._v("6dadb86d91cc4c0c2c7860e1cb16cec01e1b6511")]),s._v("，符合 "),t("code",[s._v("tag")]),s._v(" 字段，会调用该模型。")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("div",{staticClass:"highlighted"},[s._v(" ")]),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"pack_name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Touhou Project Model Pack"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_list"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"model_id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"touhou_little_maid:hakurei_reimu"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"easter_egg"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"encrypt"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"tag"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6dadb86d91cc4c0c2c7860e1cb16cec01e1b6511"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h2",{attrs:{id:"其他问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[s._v("#")]),s._v(" 其他问题")]),s._v(" "),t("h3",{attrs:{id:"贴图闪烁-z-fighting-问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#贴图闪烁-z-fighting-问题"}},[s._v("#")]),s._v(" 贴图闪烁（Z-fighting）问题")]),s._v(" "),t("p",[s._v("这是 OpenGL 本身的一个问题，我们在制作模型过程中使用了平面、或者是两个重合的立方体，就会出现此问题。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://i.imgur.com/daYk77e.png",alt:"004"}})]),s._v(" "),t("p",[s._v("对于平面图形导致的问题，只为其中某一面附上材质，另一面留空可以解决此问题；对于两个重合几何体，只需要微移几何体，或者对重合部分的材质进行剔除即可。")]),s._v(" "),t("h3",{attrs:{id:"文件名大小写问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件名大小写问题"}},[s._v("#")]),s._v(" 文件名大小写问题")]),s._v(" "),t("p",[s._v("在 Minecraft 中，所有文件名都必须是小写。")])])}),[],!1,null,null,null);t.default=e.exports}}]);