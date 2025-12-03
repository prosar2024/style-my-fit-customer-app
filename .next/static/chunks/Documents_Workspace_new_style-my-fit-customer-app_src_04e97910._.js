(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/utils/general.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/@radix-ui/react-tooltip/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/utils/general.ts [app-client] (ecmascript)");
;
;
;
;
const TooltipProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"];
const Tooltip = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const TooltipTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const TooltipContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, sideOffset = 4, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        ref: ref,
        sideOffset: sideOffset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/tooltip.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = TooltipContent;
TooltipContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tooltip$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "TooltipContent$React.forwardRef");
__turbopack_context__.k.register(_c1, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeIcon.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/tooltip.tsx [app-client] (ecmascript)");
;
;
const BodyShapeIcon = (param)=>{
    let { bodyType, size = "md", className } = param;
    const getBodyShapeImage = (type)=>{
        switch(type){
            case "apple":
                return "/lovable-uploads/7941f89d-5e17-4443-b299-84a331e24ff9.png";
            case "rectangle":
                return "/lovable-uploads/86e13313-29a0-40c8-95b5-844fa2119cf6.png";
            case "pear":
                return "/lovable-uploads/6e605906-05a8-4fcf-ab87-a8e66e8589cf.png";
            case "hourglass":
                return "/lovable-uploads/7b81f6a2-a4aa-47a1-ace1-fcb17e58946a.png";
            case "inverted-triangle":
                return "/lovable-uploads/845b34bb-5bea-4ca6-af9b-8c2710b0aa37.png";
            default:
                return "/lovable-uploads/86e13313-29a0-40c8-95b5-844fa2119cf6.png";
        }
    };
    const getBodyShapeLabel = (type)=>{
        switch(type){
            case "hourglass":
                return "Hourglass";
            case "pear":
                return "Pear";
            case "apple":
                return "Apple";
            case "rectangle":
                return "Rectangle";
            case "inverted-triangle":
                return "Inverted Triangle";
            default:
                return "Unknown";
        }
    };
    const getTooltipText = (type)=>{
        switch(type){
            case "hourglass":
                return "Suitable for Hourglass bodyshape";
            case "pear":
                return "Suitable for Pear bodyshape";
            case "apple":
                return "Suitable for Apple bodyshape";
            case "rectangle":
                return "Suitable for Rectangle bodyshape";
            case "inverted-triangle":
                return "Suitable for Inverted Triangle bodyshape";
            default:
                return "Suitable for Unknown bodyshape";
        }
    };
    const sizeClasses = {
        micro: "w-1.5 h-1.5",
        xxs: "w-3 h-3",
        xs: "w-5 h-5",
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-16 h-16"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                    asChild: true,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex items-center justify-center cursor-help ".concat(sizeClasses[size], " ").concat(className || ""),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: getBodyShapeImage(bodyType),
                            alt: getBodyShapeLabel(bodyType),
                            className: "w-full h-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeIcon.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeIcon.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeIcon.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: getTooltipText(bodyType)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeIcon.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeIcon.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeIcon.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeIcon.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BodyShapeIcon;
const __TURBOPACK__default__export__ = BodyShapeIcon;
var _c;
__turbopack_context__.k.register(_c, "BodyShapeIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeHolder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$BodyShapeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeIcon.tsx [app-client] (ecmascript)");
;
;
const BodyShapeHolder = (param)=>{
    let { bodyTypes, className = "" } = param;
    if (!bodyTypes.length) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-1 ".concat(className),
        children: bodyTypes.map((bodyType, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$BodyShapeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                bodyType: bodyType,
                size: "sm"
            }, index, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeHolder.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeHolder.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BodyShapeHolder;
const __TURBOPACK__default__export__ = BodyShapeHolder;
var _c;
__turbopack_context__.k.register(_c, "BodyShapeHolder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
;
;
const HeroBannerCarousel = (param)=>{
    let { onGetStarted, onNoMeasurements } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full flex justify-center py-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-6xl mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-8 h-full justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                    className: "h-5 w-5 mr-2 text-fashion-coral group-hover:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                    lineNumber: 18,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-fashion-teal text-base",
                                                    children: "AI-Powered Sizing"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                    lineNumber: 19,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-fashion-teal/80 leading-relaxed transition-all duration-300 group-hover:text-fashion-teal",
                                            children: "Our advanced machine learning algorithms analyze body measurements to provide precise fit recommendations."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                    lineNumber: 16,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                    className: "h-5 w-5 mr-2 text-fashion-coral group-hover:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-fashion-teal text-base",
                                                    children: "Styling Partner"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                            lineNumber: 27,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-fashion-teal/80 leading-relaxed transition-all duration-300 group-hover:text-fashion-teal",
                                            children: "Make informed fashion choices unique to your body shape."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                            lineNumber: 31,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col space-y-8 h-full justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                    className: "h-5 w-5 mr-2 text-fashion-coral group-hover:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-fashion-teal text-base",
                                                    children: "Business Growth"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-fashion-teal/80 leading-relaxed transition-all duration-300 group-hover:text-fashion-teal",
                                            children: "Increase conversion rates and reduce returns with intelligent sizing technology."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm border border-fashion-beige/50 group hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                    className: "h-5 w-5 mr-2 text-fashion-coral group-hover:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold text-fashion-teal text-base",
                                                    children: "Smart Analytics"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                    lineNumber: 52,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-fashion-teal/80 leading-relaxed transition-all duration-300 group-hover:text-fashion-teal",
                                            children: "Leverage insights to optimize inventory and enhance user experience."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                            lineNumber: 54,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "lg:hidden mt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-fashion-coral/10 rounded-lg mr-3 group-hover:bg-fashion-coral/20 transition-colors duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                            className: "h-5 w-5 text-fashion-coral group-hover:scale-110 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-fashion-teal text-sm",
                                                        children: "AI-Powered Sizing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-fashion-teal/80 leading-relaxed group-hover:text-fashion-teal transition-colors duration-300",
                                                children: "Advanced algorithms analyze measurements for precise fit recommendations."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-fashion-coral/10 rounded-lg mr-3 group-hover:bg-fashion-coral/20 transition-colors duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                            className: "h-5 w-5 text-fashion-coral group-hover:scale-110 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-fashion-teal text-sm",
                                                        children: "Styling Partner"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                lineNumber: 84,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-fashion-teal/80 leading-relaxed group-hover:text-fashion-teal transition-colors duration-300",
                                                children: "Make informed fashion choices unique to your body shape."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-fashion-coral/10 rounded-lg mr-3 group-hover:bg-fashion-coral/20 transition-colors duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-5 w-5 text-fashion-coral group-hover:scale-110 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-fashion-teal text-sm",
                                                        children: "Business Growth"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-fashion-teal/80 leading-relaxed group-hover:text-fashion-teal transition-colors duration-300",
                                                children: "Increase conversions and reduce returns with intelligent sizing."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                lineNumber: 106,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-fashion-coral/20 to-fashion-coral/5 rounded-xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-white/95 backdrop-blur-sm rounded-xl p-5 border border-fashion-coral/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-fashion-coral/10 rounded-lg mr-3 group-hover:bg-fashion-coral/20 transition-colors duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                            className: "h-5 w-5 text-fashion-coral group-hover:scale-110 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-fashion-teal text-sm",
                                                        children: "Smart Analytics"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-fashion-teal/80 leading-relaxed group-hover:text-fashion-teal transition-colors duration-300",
                                                children: "Leverage insights to optimize inventory and enhance user experience."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                        lineNumber: 115,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroBannerCarousel;
const __TURBOPACK__default__export__ = HeroBannerCarousel;
var _c;
__turbopack_context__.k.register(_c, "HeroBannerCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/hooks/use-toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: "REMOVE_TOAST",
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case "ADD_TOAST":
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case "UPDATE_TOAST":
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case "DISMISS_TOAST":
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case "REMOVE_TOAST":
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast(param) {
    let { ...props } = param;
    const id = genId();
    const update = (props)=>dispatch({
            type: "UPDATE_TOAST",
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: "DISMISS_TOAST",
            toastId: id
        });
    dispatch({
        type: "ADD_TOAST",
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    _s();
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useToast.useEffect": ()=>{
            listeners.push(setState);
            return ({
                "useToast.useEffect": ()=>{
                    const index = listeners.indexOf(setState);
                    if (index > -1) {
                        listeners.splice(index, 1);
                    }
                }
            })["useToast.useEffect"];
        }
    }["useToast.useEffect"], [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: "DISMISS_TOAST",
                toastId
            })
    };
}
_s(useToast, "SPWE98mLGnlsnNfIwu/IAKTSZtk=");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/use-toast.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/utils/general.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-fashion-coral text-white shadow-sm hover:bg-fashion-coral/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-fashion-teal text-fashion-teal bg-transparent hover:bg-fashion-teal/5",
            secondary: "bg-fashion-beige text-fashion-teal hover:bg-fashion-beige/80",
            ghost: "hover:bg-fashion-beige hover:text-fashion-teal",
            link: "text-fashion-coral underline-offset-4 hover:underline",
            premium: "bg-fashion-teal text-white hover:bg-fashion-teal/90 shadow-sm"
        },
        size: {
            default: "h-11 px-5 py-2.5",
            sm: "h-9 rounded-md px-3 text-xs",
            lg: "h-12 rounded-md px-8 text-base",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/button.tsx",
        lineNumber: 48,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This file serves as a central place for any custom icons we need to create or modify
__turbopack_context__.s([
    "Sparkles",
    ()=>Sparkles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Sparkles = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"
        }, void 0, false, {
            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/icons.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/icons.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Sparkles;
var _c;
__turbopack_context__.k.register(_c, "Sparkles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/utils/general.ts [app-client] (ecmascript)");
;
;
;
;
;
const Dialog = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const DialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const DialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const DialogClose = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"];
const DialogOverlay = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c = DialogOverlay;
DialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const DialogContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = (param, ref)=>{
    let { className, children, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
                                lineNumber: 46,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
                                lineNumber: 47,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
                        lineNumber: 45,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c2 = DialogContent;
DialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const DialogHeader = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = DialogHeader;
DialogHeader.displayName = "DialogHeader";
const DialogFooter = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = DialogFooter;
DialogFooter.displayName = "DialogFooter";
const DialogTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
        lineNumber: 86,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c6 = DialogTitle;
DialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const DialogDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = (param, ref)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx",
        lineNumber: 101,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
});
_c8 = DialogDescription;
DialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "DialogOverlay");
__turbopack_context__.k.register(_c1, "DialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "DialogContent");
__turbopack_context__.k.register(_c3, "DialogHeader");
__turbopack_context__.k.register(_c4, "DialogFooter");
__turbopack_context__.k.register(_c5, "DialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "DialogTitle");
__turbopack_context__.k.register(_c7, "DialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/utils/general.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = (param, ref)=>{
    let { className, type, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$utils$2f$general$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/input.tsx",
        lineNumber: 8,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/minimize.js [app-client] (ecmascript) <export default as Minimize>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const LiveDemoDialog = (param)=>{
    let { open, onOpenChange } = param;
    _s();
    const [height, setHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [weight, setWeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [age, setAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [minimized, setMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({
            height,
            weight,
            age
        });
    // In a real implementation, this would process the data
    };
    const handleMinimizeToggle = ()=>{
        setMinimized(!minimized);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-6xl h-[90vh] p-0 overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "sr-only",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: "Live Preview - E-commerce Integration"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-white overflow-y-auto relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-900 text-white p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between max-w-6xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xl font-bold",
                                        children: "FashionStore"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Sign In"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 48,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "aspect-square bg-gray-100 rounded-lg flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/lovable-uploads/8533b7f4-b8a3-426f-9586-957df87bb1cb.png",
                                                    alt: "Women's Blazer",
                                                    className: "max-w-full max-h-full object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 59,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-4 gap-2",
                                                children: [
                                                    1,
                                                    2,
                                                    3,
                                                    4
                                                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "aspect-square bg-gray-100 rounded border"
                                                    }, i, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 66,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                        className: "text-3xl font-bold text-gray-900",
                                                        children: "Classic Tailored Blazer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg text-gray-600 mt-2",
                                                        children: "Perfect for professional and casual wear"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center",
                                                        children: [
                                                            1,
                                                            2,
                                                            3,
                                                            4,
                                                            5
                                                        ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                className: "h-4 w-4 fill-yellow-400 text-yellow-400"
                                                            }, star, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 81,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-600",
                                                        children: "(124 reviews)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 80,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: "$89.99"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Size"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 93,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    'XS',
                                                                    'S',
                                                                    'M',
                                                                    'L',
                                                                    'XL'
                                                                ].map((size)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "border border-gray-300 px-4 py-2 rounded hover:border-gray-900",
                                                                        children: size
                                                                    }, size, false, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 94,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-4 flex justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "ghost",
                                                                    size: "sm",
                                                                    className: "p-3 h-auto hover:bg-gray-50",
                                                                    onClick: ()=>onOpenChange(false),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: "/lovable-uploads/c48f4d7d-9735-4f09-823d-69d5b0c75576.png",
                                                                        alt: "StyleMyFit - Find Your Perfect Fit",
                                                                        className: "h-32 w-auto"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                    lineNumber: 104,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-2",
                                                                children: "Colour"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-2",
                                                                children: [
                                                                    'bg-black',
                                                                    'bg-gray-600',
                                                                    'bg-blue-900'
                                                                ].map((color, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "w-8 h-8 rounded-full border-2 border-gray-300 ".concat(color)
                                                                    }, i, false, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                        lineNumber: 123,
                                                                        columnNumber: 25
                                                                    }, ("TURBOPACK compile-time value", void 0)))
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        className: "flex-1",
                                                        children: "Add to Cart"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "outline",
                                                        size: "icon",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-t pt-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold mb-2",
                                                        children: "Product Details"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "text-sm text-gray-600 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Premium wool blend fabric"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Professional tailored fit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Two-button closure"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Dry clean only"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 142,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-4 right-4 z-50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "\n                w-[350px] sm:w-[400px] \n                bg-fashion-beige/95 \n                rounded-lg \n                shadow-lg \n                border\n                transition-all\n                ".concat(minimized ? 'h-[70px]' : 'h-auto', "\n              "),
                                children: minimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/lovable-uploads/c48f4d7d-9735-4f09-823d-69d5b0c75576.png",
                                                    alt: "StyleMyFit Logo",
                                                    className: "h-12 mr-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-fashion-teal font-medium text-lg",
                                                    children: "StyleMyFit"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-8 w-8",
                                                    onClick: handleMinimizeToggle,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize$3e$__["Minimize"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 173,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-8 w-8",
                                                    onClick: ()=>onOpenChange(false),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                            lineNumber: 172,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                    lineNumber: 163,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-4 top-4 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-8 w-8",
                                                    onClick: handleMinimizeToggle,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize$3e$__["Minimize"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    size: "icon",
                                                    className: "h-8 w-8",
                                                    onClick: ()=>onOpenChange(false),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 202,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                            lineNumber: 193,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-6 pt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/lovable-uploads/c48f4d7d-9735-4f09-823d-69d5b0c75576.png",
                                                        alt: "StyleMyFit Logo",
                                                        className: "h-32"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-semibold text-fashion-teal mb-2",
                                                            children: "Find Your Perfect Fit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-fashion-teal/80",
                                                            children: "Get personalized size recommendations"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                            lineNumber: 223,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                    onSubmit: handleSubmit,
                                                    className: "space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "height",
                                                                    className: "text-sm font-medium text-fashion-teal",
                                                                    children: "Height"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    id: "height",
                                                                    value: height,
                                                                    onChange: (e)=>setHeight(e.target.value),
                                                                    className: "w-20 bg-white text-xs",
                                                                    placeholder: "cm"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "weight",
                                                                    className: "text-sm font-medium text-fashion-teal",
                                                                    children: "Weight"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    id: "weight",
                                                                    value: weight,
                                                                    onChange: (e)=>setWeight(e.target.value),
                                                                    className: "w-20 bg-white text-xs",
                                                                    placeholder: "kg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                    lineNumber: 240,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                            lineNumber: 238,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: "age",
                                                                    className: "text-sm font-medium text-fashion-teal",
                                                                    children: "Age"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                    lineNumber: 250,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                    id: "age",
                                                                    value: age,
                                                                    onChange: (e)=>setAge(e.target.value),
                                                                    className: "w-20 bg-white text-xs",
                                                                    placeholder: "years"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                            lineNumber: 249,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex justify-center pt-2",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                type: "submit",
                                                                className: "bg-fashion-coral hover:bg-fashion-coral/90 text-white w-full",
                                                                size: "sm",
                                                                children: "Get My Size"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-600 text-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "New to StyleMyFit? "
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/",
                                                            className: "underline font-medium text-fashion-coral",
                                                            children: "Learn more"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                    lineNumber: 192,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                                lineNumber: 151,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LiveDemoDialog, "N4yG5xBICMQErNurgSNkA5xqr/0=");
_c = LiveDemoDialog;
const __TURBOPACK__default__export__ = LiveDemoDialog;
var _c;
__turbopack_context__.k.register(_c, "LiveDemoDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/dialog.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ExplainerVideoSection = ()=>{
    _s();
    const [isVideoOpen, setIsVideoOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-16 bg-gradient-to-br from-fashion-beige/10 to-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-4xl font-bold text-fashion-teal mb-8",
                                children: "How StyleMyFit Works"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group cursor-pointer",
                                onClick: ()=>setIsVideoOpen(true),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden rounded-xl shadow-2xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/lovable-uploads/3f32d7fe-c6ec-4f68-9b82-6df8a1d6ad3c.png",
                                            alt: "StyleMyFit Avatar Customization - Video Thumbnail",
                                            className: "w-full h-auto max-h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                            lineNumber: 21,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    className: "h-12 w-12 text-fashion-teal ml-1",
                                                    fill: "currentColor"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                                lineNumber: 32,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm",
                                            children: "2:30"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                    lineNumber: 20,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isVideoOpen,
                onOpenChange: setIsVideoOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                    className: "max-w-4xl w-full p-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            className: "sr-only",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                    children: "StyleMyFit Explainer Video"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                    children: "Learn how StyleMyFit's AI avatar technology works"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative bg-black rounded-lg overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    size: "icon",
                                    className: "absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white",
                                    onClick: ()=>setIsVideoOpen(false),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Close video"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "aspect-video flex items-center justify-center bg-gradient-to-br from-fashion-teal to-fashion-coral",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                className: "h-20 w-20 mx-auto mb-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-semibold mb-2",
                                                children: "Video Coming Soon"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-white/80",
                                                children: "Your explainer video will be embedded here"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                                lineNumber: 74,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ExplainerVideoSection, "0gMMheBJ1PF6gNwW8cFintbufGY=");
_c = ExplainerVideoSection;
const __TURBOPACK__default__export__ = ExplainerVideoSection;
var _c;
__turbopack_context__.k.register(_c, "ExplainerVideoSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/structured-midi-dress-model.jpg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/structured-midi-dress-model.ad613a87.jpg");}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/structured-midi-dress-model.jpg.mjs { IMAGE => \"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/structured-midi-dress-model.jpg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$structured$2d$midi$2d$dress$2d$model$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/structured-midi-dress-model.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$structured$2d$midi$2d$dress$2d$model$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 768,
    height: 1024,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAYDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDq720UanMBwNq5/Wubl1Zpf3Uf/9k="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/tailored-wide-leg-pants-model.jpg (static in ecmascript)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/tailored-wide-leg-pants-model.4f06ef9a.jpg");}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/tailored-wide-leg-pants-model.jpg.mjs { IMAGE => \"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/tailored-wide-leg-pants-model.jpg (static in ecmascript)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$tailored$2d$wide$2d$leg$2d$pants$2d$model$2e$jpg__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/tailored-wide-leg-pants-model.jpg (static in ecmascript)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$tailored$2d$wide$2d$leg$2d$pants$2d$model$2e$jpg__$28$static__in__ecmascript$29$__["default"],
    width: 768,
    height: 1024,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAYDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDqUvba58S6lZwx4kt1i8x8/eJB4x7cVPIRzaH/2Q=="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/data/mockClothingData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllClothing",
    ()=>getAllClothing,
    "getClothingById",
    ()=>getClothingById,
    "getClothingByType",
    ()=>getClothingByType,
    "getHomepageProducts",
    ()=>getHomepageProducts,
    "getRecommendedClothing",
    ()=>getRecommendedClothing
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$structured$2d$midi$2d$dress$2d$model$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$structured$2d$midi$2d$dress$2d$model$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/structured-midi-dress-model.jpg.mjs { IMAGE => "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/structured-midi-dress-model.jpg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$tailored$2d$wide$2d$leg$2d$pants$2d$model$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$tailored$2d$wide$2d$leg$2d$pants$2d$model$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/tailored-wide-leg-pants-model.jpg.mjs { IMAGE => "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/assets/tailored-wide-leg-pants-model.jpg (static in ecmascript)" } [app-client] (structured image object with data url, ecmascript)');
;
;
// Mock product data - using the same products as shown on home page
const clothingData = [
    {
        id: 'black-blazer',
        name: "Classic Black Blazer",
        type: "outerwear",
        imageUrl: "/lovable-uploads/362a7e77-0f9f-4232-85ad-dc4e1a11f5e1.png",
        description: "A timeless classic that elevates any outfit. This structured wool blazer features clean lines and sophisticated detailing.",
        price: 450,
        bodyTypes: [
            "hourglass",
            "rectangle"
        ],
        brand: "JuJu"
    },
    {
        id: 'black-dress',
        name: "Belted Black Dress",
        type: "dresses",
        imageUrl: "/lovable-uploads/080741bc-13b9-47c1-8f51-45e655dbfbaf.png",
        description: "A versatile midi dress with a cinched waist that creates a beautiful silhouette. Perfect for both day and evening wear.",
        price: 385,
        bodyTypes: [
            "hourglass"
        ],
        brand: "JuJu"
    },
    {
        id: 'white-dress',
        name: "Elegant White Dress",
        type: "dresses",
        imageUrl: "/lovable-uploads/6593ea9a-91e1-415d-8e1e-7641480ae35e.png",
        description: "A stunning V-neck sleeveless midi dress that creates an elongating silhouette perfect for apple body types.",
        price: 295,
        bodyTypes: [
            "apple",
            "rectangle",
            "hourglass"
        ],
        brand: "JuJu"
    },
    {
        id: 'orange-blazer',
        name: "Orange Blazer Set",
        type: "outerwear",
        imageUrl: "/lovable-uploads/2cd58b40-2fc6-4a4c-8b33-f3c9929017bf.png",
        description: "A striking orange blazer set with matching trousers. The structured design enhances the hourglass silhouette.",
        price: 520,
        bodyTypes: [
            "hourglass",
            "inverted-triangle"
        ],
        brand: "JuJu"
    },
    {
        id: "velvet-satin-top",
        name: "VELVET ESME SATIN TOP",
        type: "tops",
        imageUrl: "/lovable-uploads/ec196b50-ccbd-479c-9955-bb83a4d454af.png",
        description: "Relaxed fit satin top with elegant velvet finish",
        price: 285,
        bodyTypes: [
            "pear"
        ],
        brand: "JuJu"
    },
    {
        id: "cashmere-jumper",
        name: "CASHMERE JUMPER",
        type: "tops",
        imageUrl: "/lovable-uploads/c40251e8-a434-4b1a-90b1-b7bad31b3e06.png",
        description: "Relaxed fit jumper made of premium cashmere",
        price: 364,
        bodyTypes: [
            "apple",
            "inverted-triangle",
            "rectangle"
        ],
        brand: "JuJu"
    },
    {
        id: "vince-collarless-jacket",
        name: "VINCE COLLARLESS JACKET",
        type: "outerwear",
        imageUrl: "/lovable-uploads/5b7a49a9-cbee-4976-a7fb-49ea06de02de.png",
        description: "Wool and nylon blend collarless jacket",
        price: 660,
        bodyTypes: [
            "hourglass",
            "pear"
        ],
        brand: "JuJu"
    },
    {
        id: "studio-nicholson-enna",
        name: "STUDIO NICHOLSON ENNA",
        type: "dresses",
        imageUrl: "/lovable-uploads/64644141-5070-4b59-8e13-671f62edfc7e.png",
        description: "V neckline elegant dress with modern silhouette",
        price: 558,
        bodyTypes: [
            "apple"
        ],
        brand: "JuJu"
    },
    {
        id: "slim-fit-trousers",
        name: "Slim-Fit Trousers",
        type: "trousers",
        imageUrl: "/lovable-uploads/8533b7f4-b8a3-426f-9586-957df87bb1cb.png",
        description: "Sophisticated slim-fit trousers for work or evenings",
        price: 95,
        bodyTypes: [
            "hourglass",
            "rectangle",
            "inverted-triangle"
        ],
        brand: "JuJu"
    },
    {
        id: "v-neck-sweater",
        name: "V-Neck Sweater",
        type: "tops",
        imageUrl: "/lovable-uploads/eb7dc452-17a8-4f28-b10d-5d5581fc0d20.png",
        description: "Soft, comfortable V-neck sweater for casual elegance",
        price: 110,
        bodyTypes: [
            "apple",
            "inverted-triangle"
        ],
        brand: "JuJu"
    },
    {
        id: "flowy-maxi-skirt",
        name: "Flowy Maxi Skirt",
        type: "skirts",
        imageUrl: "/lovable-uploads/64644141-5070-4b59-8e13-671f62edfc7e.png",
        description: "Elegant flowy maxi skirt perfect for summer days",
        price: 120,
        bodyTypes: [
            "pear",
            "hourglass"
        ],
        brand: "JuJu"
    },
    {
        id: "landskein-silk-blouse",
        name: "Silk Elegance Blouse",
        type: "tops",
        imageUrl: "/lovable-uploads/799b57f6-61b0-4aff-93cb-feb25ad5be3a.png",
        description: "Luxurious silk blouse with refined tailoring",
        price: 295,
        bodyTypes: [
            "hourglass",
            "rectangle",
            "inverted-triangle"
        ],
        brand: "Landskein"
    },
    {
        id: "landskein-tailored-pants",
        name: "Tailored Wide-Leg Pants",
        type: "trousers",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$tailored$2d$wide$2d$leg$2d$pants$2d$model$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$tailored$2d$wide$2d$leg$2d$pants$2d$model$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        description: "Contemporary wide-leg trousers with elegant drape",
        price: 385,
        bodyTypes: [
            "pear",
            "hourglass",
            "rectangle"
        ],
        brand: "Landskein"
    },
    {
        id: "landskein-midi-dress",
        name: "Structured Midi Dress",
        type: "dresses",
        imageUrl: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$structured$2d$midi$2d$dress$2d$model$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$assets$2f$structured$2d$midi$2d$dress$2d$model$2e$jpg__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        description: "Sophisticated midi dress with architectural lines",
        price: 485,
        bodyTypes: [
            "apple",
            "hourglass"
        ],
        brand: "Landskein"
    }
];
function getRecommendedClothing(bodyType) {
    return clothingData.filter((item)=>item.bodyTypes.includes(bodyType));
}
function getAllClothing() {
    return clothingData;
}
function getClothingByType(type) {
    return clothingData.filter((item)=>item.type === type);
}
function getClothingById(id) {
    return clothingData.find((item)=>item.id === id);
}
function getHomepageProducts() {
    let showMore = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const mainProducts = [
        clothingData.find((item)=>item.id === 'black-blazer'),
        clothingData.find((item)=>item.id === 'black-dress'),
        clothingData.find((item)=>item.id === 'white-dress'),
        clothingData.find((item)=>item.id === 'orange-blazer')
    ].filter(Boolean);
    if (!showMore) {
        return mainProducts;
    }
    const additionalProducts = [
        clothingData.find((item)=>item.id === 'velvet-satin-top'),
        clothingData.find((item)=>item.id === 'cashmere-jumper'),
        clothingData.find((item)=>item.id === 'vince-collarless-jacket'),
        clothingData.find((item)=>item.id === 'studio-nicholson-enna')
    ].filter(Boolean);
    return [
        ...mainProducts,
        ...additionalProducts
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$BodyShapeHolder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/BodyShapeHolder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$HeroBannerCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/HeroBannerCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/use-toast.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/ruler.js [app-client] (ecmascript) <export default as Ruler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBar$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/chart-bar.js [app-client] (ecmascript) <export default as ChartBar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$LiveDemoDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/LiveDemoDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$ExplainerVideoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/home/ExplainerVideoSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$data$2f$mockClothingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/data/mockClothingData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const Index = ()=>{
    _s();
    const [bodyType, setBodyType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [measurements, setMeasurements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("intro");
    const [showLiveDemo, setShowLiveDemo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showMoreProducts, setShowMoreProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [favorites, setFavorites] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const toggleFavorite = (e, productId)=>{
        e.stopPropagation();
        const newFavorites = new Set(favorites);
        if (newFavorites.has(productId)) {
            newFavorites.delete(productId);
        } else {
            newFavorites.add(productId);
        }
        setFavorites(newFavorites);
    };
    const handleBodyTypeChange = (newBodyType, newMeasurements)=>{
        setIsLoading(true);
        // Simulate API call delay
        setTimeout(()=>{
            setBodyType(newBodyType);
            setMeasurements(newMeasurements);
            setIsLoading(false);
            setCurrentStep("results");
            if (newBodyType !== "unknown") {
                toast({
                    title: "Body Shape Analysis Complete",
                    description: "We've analyzed your measurements and found personalized recommendations.",
                    duration: 5000
                });
            }
        }, 1500);
    };
    const handleAlternativeSizing = (estimatedBodyType)=>{
        setIsLoading(true);
        // Simulate API call delay
        setTimeout(()=>{
            setBodyType(estimatedBodyType);
            setIsLoading(false);
            setCurrentStep("results");
        }, 1000);
    };
    const handleGuidedFlowComplete = (bodyType, predictions)=>{
        setIsLoading(true);
        // Simulate processing delay
        setTimeout(()=>{
            setBodyType(bodyType);
            setIsLoading(false);
            setCurrentStep("results");
            toast({
                title: "Body Shape Prediction Complete",
                description: "Great! We've identified your body shape as ".concat(bodyType.replace('-', ' ')),
                duration: 5000
            });
        }, 1000);
    };
    const handleProductClick = (productId)=>{
        navigate.push("/product/".concat(productId));
    };
    const handleViewMore = ()=>{
        setShowMoreProducts(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-16 bg-fashion-beige/10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/lovable-uploads/fff7fc5a-feec-464b-a87d-1f3d424185c2.png",
                                    alt: "StyleMyFit App - Woman shopping with mobile interface",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                lineNumber: 98,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-black/20 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center px-4 max-w-2xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg",
                                            children: "Find Your Perfect Fit"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg md:text-xl text-white/90 mb-8 drop-shadow-md",
                                            children: "Get personalized style recommendations instantly"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "premium",
                                                    size: "lg",
                                                    className: "px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200",
                                                    onClick: ()=>navigate.push("/measurement"),
                                                    children: [
                                                        "Find My Style",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "ml-2 h-5 w-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 17
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "secondary",
                                                    size: "lg",
                                                    className: "px-8 py-4 text-lg bg-white/95 text-fashion-teal hover:bg-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200",
                                                    onClick: ()=>navigate.push("/guided-flow"),
                                                    children: "I don't know my measurements"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                lineNumber: 107,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                        lineNumber: 97,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-4 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$data$2f$mockClothingData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHomepageProducts"])(showMoreProducts).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "group cursor-pointer",
                                            onClick: ()=>handleProductClick(product.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative aspect-[3/4] bg-fashion-beige/20 rounded-lg overflow-hidden mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: product.imageUrl,
                                                            alt: product.name,
                                                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "ghost",
                                                            size: "icon",
                                                            className: "absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white w-8 h-8",
                                                            onClick: (e)=>toggleFavorite(e, product.id),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                    className: "h-4 w-4 ".concat(favorites.has(product.id) ? "fill-red-500 text-red-500" : "")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 153,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sr-only",
                                                                    children: "Add to favorites"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$BodyShapeHolder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            bodyTypes: product.bodyTypes,
                                                            className: "absolute bottom-2 right-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-fashion-teal/60 uppercase tracking-wide",
                                                            children: product.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 162,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-medium text-fashion-teal text-sm",
                                                            children: product.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-fashion-teal",
                                                                children: [
                                                                    "€ ",
                                                                    product.price,
                                                                    ".00"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, product.id, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                !showMoreProducts && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "outline",
                                        size: "lg",
                                        className: "px-8 py-3",
                                        onClick: handleViewMore,
                                        children: "View More"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                    lineNumber: 174,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                            lineNumber: 141,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                        lineNumber: 140,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$HeroBannerCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onGetStarted: ()=>setCurrentStep("measurement"),
                        onNoMeasurements: ()=>setCurrentStep("guided")
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                        lineNumber: 184,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$ExplainerVideoSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                        lineNumber: 187,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-8 bg-fashion-beige/20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg p-8 text-center shadow-sm group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ruler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Ruler$3e$__["Ruler"], {
                                                className: "h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-3 text-fashion-teal",
                                                children: "Precise Recommendations"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal",
                                                children: "Get clothing suggestions perfectly matched to your unique body shape."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-fashion-beige/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "text-sm text-fashion-teal/60 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• AI-powered body shape analysis"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 203,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Personalized style recommendations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Real-time fit predictions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 201,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg p-8 text-center shadow-sm group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 212,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-3 text-fashion-teal",
                                                children: "Perfect Fit Every Time"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal",
                                                children: "Say goodbye to returns and exchanges with our tailored sizing solution."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-fashion-beige/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "text-sm text-fashion-teal/60 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• 95% accuracy rate"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Size conversion across brands"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Fit confidence scoring"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                        lineNumber: 211,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-lg p-8 text-center shadow-sm group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sparkles"], {
                                                className: "h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-3 text-fashion-teal",
                                                children: "Styling Expertise"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal",
                                                children: "Discover which styles enhance your natural shape and personal style."
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 232,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pt-4 border-t border-fashion-beige/30",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "text-sm text-fashion-teal/60 space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Professional styling tips"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Color palette suggestions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "• Trend-based recommendations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                lineNumber: 241,
                                                                columnNumber: 21
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                        lineNumber: 238,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 236,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                            lineNumber: 191,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                        lineNumber: 190,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "py-16 bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container mx-auto px-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-3xl md:text-4xl font-bold text-fashion-teal mb-4",
                                            children: "For Fashion Businesses"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-lg text-fashion-teal/80 max-w-3xl mx-auto",
                                            children: "Transform your customer experience with StyleMyFit's powerful sizing and recommendation engine."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 255,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                    lineNumber: 253,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-fashion-beige/30 p-8 rounded-lg text-center group hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                    className: "h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold mb-3 text-fashion-teal",
                                                    children: "Increase Revenue"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 263,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal",
                                                    children: "Boost conversions by up to 35% with accurate fit recommendations."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 border-t border-fashion-coral/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-fashion-teal/60 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-fashion-coral",
                                                                    children: "Key Benefits:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• Higher conversion rates"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• Increased average order value"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 273,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• Better customer satisfaction"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 274,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 270,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 268,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 261,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-fashion-beige/30 p-8 rounded-lg text-center group hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold mb-3 text-fashion-teal",
                                                    children: "Enhance Experience"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal",
                                                    children: "Provide personalized shopping journeys that make customers feel valued."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 283,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 border-t border-fashion-coral/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-fashion-teal/60 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-fashion-coral",
                                                                    children: "Features Include:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• Personalized recommendations"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 291,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• Interactive size guides"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• Virtual fitting rooms"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 289,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-fashion-beige/30 p-8 rounded-lg text-center group hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChartBar$3e$__["ChartBar"], {
                                                    className: "h-12 w-12 text-fashion-coral mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold mb-3 text-fashion-teal",
                                                    children: "Reduce Returns"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-fashion-teal/70 transition-all duration-300 group-hover:text-fashion-teal",
                                                    children: "Cut return rates by as much as 42% by getting the fit right the first time."
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pt-4 border-t border-fashion-coral/20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-fashion-teal/60 space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "font-medium text-fashion-coral",
                                                                    children: "Impact Metrics:"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• 42% reduction in returns"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 310,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• Faster inventory turnover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 311,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    children: "• Improved profit margins"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                                    lineNumber: 312,
                                                                    columnNumber: 21
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 308,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                    lineNumber: 306,
                                                    columnNumber: 15
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                    lineNumber: 260,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-12 text-center flex flex-col sm:flex-row gap-4 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "premium",
                                            size: "lg",
                                            className: "px-8 py-3",
                                            children: "Partner With StyleMyFit"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 320,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipProvider"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                        asChild: true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                            variant: "outline",
                                                            size: "lg",
                                                            onClick: ()=>setShowLiveDemo(true),
                                                            className: "px-8 py-3",
                                                            children: "Live Preview"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                        lineNumber: 326,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "max-w-xs",
                                                            children: "See how StyleMyFit appears on your e-commerce website"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                            lineNumber: 332,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 13
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                                    lineNumber: 319,
                                    columnNumber: 11
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                            lineNumber: 252,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                        lineNumber: 251,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                lineNumber: 95,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            currentStep !== "intro" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-8 pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    onClick: ()=>setCurrentStep("intro"),
                    className: "text-muted-foreground",
                    children: "Back to Home"
                }, void 0, false, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$home$2f$LiveDemoDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: showLiveDemo,
                onOpenChange: setShowLiveDemo
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
                lineNumber: 348,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/page.tsx",
        lineNumber: 94,
        columnNumber: 11
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Index, "U1KNXLPnM6fJY+KBu5eWWvEpgag=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Index;
const __TURBOPACK__default__export__ = Index;
var _c;
__turbopack_context__.k.register(_c, "Index");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Workspace_new_style-my-fit-customer-app_src_04e97910._.js.map