(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/ImageWithFallback.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageWithFallback",
    ()=>ImageWithFallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ERROR_IMG_SRC = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==';
function ImageWithFallback(props) {
    _s();
    const [didError, setDidError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleError = ()=>{
        setDidError(true);
    };
    const { src, alt, style, className, ...rest } = props;
    return didError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "inline-block bg-gray-100 text-center align-middle ".concat(className !== null && className !== void 0 ? className : ''),
        style: style,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-full h-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: ERROR_IMG_SRC,
                alt: "Error loading image",
                ...rest,
                "data-original-url": src
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/ImageWithFallback.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/ImageWithFallback.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/ImageWithFallback.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: src,
        alt: alt,
        className: className,
        style: style,
        ...rest,
        onError: handleError
    }, void 0, false, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/ImageWithFallback.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(ImageWithFallback, "QMNzFKr35q4hEDRZ59yrU4N+ufk=");
_c = ImageWithFallback;
var _c;
__turbopack_context__.k.register(_c, "ImageWithFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import image_0adf8eb1507afe77eade045630101c74461742c0 from 'figma:asset/0adf8eb1507afe77eade045630101c74461742c0.png';
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/tag.js [app-client] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$ImageWithFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Workspace/new/style-my-fit-customer-app/src/components/ui/atoms/ImageWithFallback.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const blogPosts = [
    {
        id: 1,
        category: 'Style Tips',
        date: 'March 15, 2025',
        title: 'Understanding Your Body Shape and Fashion Choices',
        excerpt: 'Learn how identifying your body shape can transform your fashion choices and style confidence.',
        image: "",
        featured: true,
        readTime: '5 min read',
        fullContent: "\n      <p>Every body is unique and beautiful in its own way. Understanding your body shape is not about conforming to standards, but about celebrating what makes you, you. When you know your body shape, you can make fashion choices that enhance your natural features and boost your confidence.</p>\n      \n      <h3>The Five Main Body Shapes</h3>\n      <p>Fashion experts typically categorize body shapes into five main types: Rectangle, Triangle (Pear), Inverted Triangle, Hourglass, and Apple. Each shape has its own beautiful characteristics and understanding yours helps you choose clothing that flatters your figure.</p>\n      \n      <h4>Rectangle Body Shape</h4>\n      <p>If your shoulders, waist, and hips are relatively similar in width, you likely have a rectangle body shape. This athletic build looks amazing in clothing that creates curves and defines the waist. Try belted dresses, peplum tops, and fit-and-flare styles.</p>\n      \n      <h4>Triangle (Pear) Body Shape</h4>\n      <p>With hips wider than shoulders, the pear shape is incredibly feminine. Emphasize your upper body with statement necklines, bright colors on top, and darker bottoms. A-line skirts and wide-leg pants are your best friends.</p>\n      \n      <h4>Inverted Triangle Body Shape</h4>\n      <p>Broader shoulders with narrower hips create this strong, athletic silhouette. Balance your proportions with V-necks, A-line skirts, and details that draw attention to your lower half.</p>\n      \n      <h4>Hourglass Body Shape</h4>\n      <p>With balanced shoulders and hips and a defined waist, the hourglass shape shines in fitted clothing. Wrap dresses, high-waisted styles, and anything that cinches at the waist will accentuate your curves beautifully.</p>\n      \n      <h4>Apple Body Shape</h4>\n      <p>Carrying weight around the midsection with slimmer legs, apple shapes look fantastic in empire waist dresses, V-necklines that elongate the torso, and styles that skim over the middle while showing off those gorgeous legs.</p>\n      \n      <h3>Fashion Tips for Every Body Shape</h3>\n      <p>Regardless of your body shape, certain universal principles apply. Always prioritize fit over size - a well-fitted garment in a larger size looks better than squeezing into something too small. Invest in quality undergarments that provide proper support and create a smooth silhouette.</p>\n      \n      <h3>The Power of Proportions</h3>\n      <p>Understanding proportions is key to dressing your body shape. If you're petite, avoid overwhelming your frame with oversized pieces. If you're tall, embrace maxi lengths and longer layers. The goal is to create visual balance that makes you feel confident and comfortable.</p>\n      \n      <h3>Embrace Your Shape with StyleMyFit</h3>\n      <p>Our revolutionary technology takes the guesswork out of finding clothes that fit and flatter your unique body shape. By analyzing your measurements and body type, we provide personalized recommendations that help you look and feel your absolute best. Fashion should be fun, not frustrating - and with the right knowledge and tools, you can build a wardrobe you love.</p>\n    "
    },
    {
        id: 2,
        category: 'Technology',
        date: 'April 8, 2025',
        title: 'The Science Behind Perfect Fit Clothing',
        excerpt: 'Discover how technology is changing the way we shop for clothes online with better fit predictions.',
        image: 'https://images.unsplash.com/photo-1758521960392-fe9c9e35aa1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY2xvdGhpbmclMjBmaXR8ZW58MXx8fHwxNzYyODE3Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
        readTime: '7 min read',
        fullContent: "\n      <p>Online fashion shopping has come a long way since its inception. What started as a risky proposition - buying clothes without trying them on - has evolved into a sophisticated industry powered by cutting-edge technology. Today, artificial intelligence and machine learning are revolutionizing how we find the perfect fit.</p>\n      \n      <h3>The Problem with Traditional Sizing</h3>\n      <p>Anyone who's shopped for clothes knows the frustration: you're a size 10 in one brand, a size 12 in another, and a medium in yet another. Traditional sizing is inconsistent, outdated, and fails to account for the beautiful diversity of human bodies. This leads to high return rates, waste, and frustrated customers.</p>\n      \n      <h3>How AI Analyzes Your Body Shape</h3>\n      <p>Modern body shape analysis uses sophisticated algorithms that go far beyond simple measurements. By analyzing key data points - shoulder width, bust, waist, hips, and more - AI can determine not just your size, but your unique body proportions and shape category.</p>\n      \n      <h3>Machine Learning and Fit Prediction</h3>\n      <p>Machine learning models are trained on millions of data points from real customers. They learn which garments fit which body types, taking into account factors like fabric stretch, cut, and design. The more data the system processes, the more accurate its predictions become.</p>\n      \n      <h3>The Database of Perfect Fits</h3>\n      <p>Behind every great fit recommendation is a comprehensive database. This database contains detailed information about thousands of garments - their measurements, how they drape, how the fabric behaves, and real customer feedback about fit. When you input your measurements, the system compares them against this database to find your perfect matches.</p>\n      \n      <h3>Virtual Try-On Technology</h3>\n      <p>The future of online shopping includes augmented reality and virtual try-on features. Using your smartphone camera, you can see how clothes will look on your body before you buy. This technology creates a digital representation of you and overlays clothing items in real-time.</p>\n      \n      <h3>Reducing Returns and Environmental Impact</h3>\n      <p>Better fit prediction doesn't just benefit customers - it's crucial for sustainability. The fashion industry generates massive waste through returns. When customers can confidently choose items that will fit, return rates drop dramatically, reducing the environmental impact of shipping and packaging.</p>\n      \n      <h3>The StyleMyFit Advantage</h3>\n      <p>Our platform combines all these technologies into one seamless experience. From initial body shape analysis to personalized recommendations, we're using science and technology to ensure you get clothes that fit perfectly the first time. No more guesswork, no more disappointment - just fashion that works for your unique body.</p>\n      \n      <h3>The Future is Personalized</h3>\n      <p>As technology continues to advance, the shopping experience will become increasingly personalized. Imagine a future where every online store knows your exact measurements and preferences, where virtual fitting rooms are as accurate as physical ones, and where every purchase fits perfectly. That future is closer than you think, and it's being built today with innovations in AI, machine learning, and computer vision.</p>\n    "
    },
    {
        id: 3,
        category: 'Sustainability',
        date: 'May 22, 2025',
        title: 'Sustainable Fashion: Making Ethical Choices',
        excerpt: 'How choosing well-fitted clothing reduces returns and contributes to sustainable fashion practices.',
        image: 'https://images.unsplash.com/photo-1699266811103-5039f618f5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhc2hpb24lMjBldGhpY2FsfGVufDF8fHx8MTc2MjgxNzY5NHww&ixlib=rb-4.1.0&q=80&w=1080',
        readTime: '6 min read',
        fullContent: "\n      <p>The fashion industry is one of the world's largest polluters, responsible for 10% of global carbon emissions and 20% of wastewater. But there's a less-discussed contributor to this problem: returns. Every year, billions of items are returned, creating a massive environmental footprint through transportation, repackaging, and often, disposal.</p>\n      \n      <h3>The Return Rate Crisis</h3>\n      <p>Online fashion retailers face return rates as high as 30-40%, with poor fit being the number one reason. Each return means double the shipping emissions, extra packaging waste, and significant energy consumption. Many returned items, especially those from fast fashion brands, end up in landfills rather than being resold.</p>\n      \n      <h3>How Perfect Fit Reduces Waste</h3>\n      <p>When you find clothes that fit perfectly the first time, you keep them. This simple fact has profound environmental implications. Reducing returns by even 10% would save millions of tons of CO2 emissions annually. Technologies that help predict fit accurately are therefore crucial sustainability tools.</p>\n      \n      <h3>Quality Over Quantity</h3>\n      <p>Sustainable fashion isn't just about materials - it's about mindset. When you invest in well-fitting, quality pieces that you'll wear for years, you reduce your overall consumption. A smaller wardrobe of perfect fits is more sustainable than a closet full of ill-fitting fast fashion.</p>\n      \n      <h3>The True Cost of Fast Fashion</h3>\n      <p>Fast fashion's environmental impact extends beyond manufacturing. The business model encourages overconsumption, with trendy pieces designed to be worn a few times and discarded. Poor quality and inconsistent sizing lead to higher return rates and shorter garment lifespans.</p>\n      \n      <h3>Sustainable Materials Matter</h3>\n      <p>Choosing clothing made from sustainable materials - organic cotton, recycled polyester, Tencel, hemp, or linen - reduces environmental impact. But even the most sustainable fabric becomes waste if the garment doesn't fit and gets returned or discarded.</p>\n      \n      <h3>The Circular Fashion Economy</h3>\n      <p>The future of fashion is circular - designing with end-of-life in mind, using recyclable materials, and creating systems for garment repair, resale, and recycling. Well-fitting clothes are more likely to be worn, loved, repaired, and eventually passed on or recycled, keeping them in the circular economy longer.</p>\n      \n      <h3>Ethical Manufacturing Practices</h3>\n      <p>Sustainable fashion also means fair wages and safe working conditions for garment workers. By supporting brands with ethical manufacturing practices and reducing overconsumption through better fit, we contribute to positive change throughout the fashion supply chain.</p>\n      \n      <h3>Your Role in Sustainable Fashion</h3>\n      <p>As consumers, we have power. Every purchase is a vote for the kind of fashion industry we want. By prioritizing fit, quality, and sustainability over trends and quantity, we drive industry change. Use technology to find perfect fits, invest in quality pieces, care for your clothes properly, and choose brands aligned with your values.</p>\n      \n      <h3>StyleMyFit's Commitment to Sustainability</h3>\n      <p>By helping you find clothes that fit perfectly the first time, we're reducing returns and their environmental impact. Our technology promotes mindful consumption - buying less but better. We believe the most sustainable garment is one you'll wear and love for years, and we're committed to helping you find exactly that.</p>\n    "
    }
];
const popularPosts = [
    {
        title: 'Top 10 Fashion Trends for 2025',
        views: '12.5K'
    },
    {
        title: 'How to Build a Capsule Wardrobe',
        views: '9.8K'
    },
    {
        title: 'The Ultimate Guide to Body Measurements',
        views: '8.2K'
    },
    {
        title: 'Color Theory in Fashion',
        views: '7.1K'
    }
];
const categories = [
    {
        name: 'Style Tips',
        count: 24
    },
    {
        name: 'Technology',
        count: 18
    },
    {
        name: 'Sustainability',
        count: 15
    },
    {
        name: 'Body Positivity',
        count: 21
    },
    {
        name: 'Fashion Trends',
        count: 32
    }
];
function BlogPage(param) {
    let { onGoHome, onShopClick, onWishlistClick, onAboutClick, onContactClick, onSolutionClick, onBodyShapeGuideClick } = param;
    _s();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedPost, setSelectedPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openPostModal = (post)=>{
        setSelectedPost(post);
        document.body.style.overflow = 'hidden';
    };
    const closePostModal = ()=>{
        setSelectedPost(null);
        document.body.style.overflow = '';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        exit: {
            opacity: 0
        },
        className: "inset-0 z-[9998] bg-white overflow-y-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "relative bg-gradient-to-br from-[#222222] via-[#2d2d2d] to-[#1a1a1a] text-white overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0",
                                    style: {
                                        backgroundImage: "repeating-linear-gradient(45deg, #b2833a 0px, #b2833a 1px, transparent 1px, transparent 20px)"
                                    },
                                    animate: {
                                        backgroundPosition: [
                                            '0px 0px',
                                            '40px 40px'
                                        ]
                                    },
                                    transition: {
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: 'linear'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center max-w-4xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 30
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: 0.8,
                                                ease: 'easeOut'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                                className: "mb-6",
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                transition: {
                                                    delay: 0.2
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    className: "inline-block",
                                                    animate: {
                                                        backgroundPosition: [
                                                            '0% 50%',
                                                            '100% 50%',
                                                            '0% 50%'
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 5,
                                                        repeat: Infinity,
                                                        ease: 'linear'
                                                    },
                                                    style: {
                                                        backgroundImage: 'linear-gradient(90deg, #ffffff, #b2833a, #D38436, #ffffff)',
                                                        backgroundSize: '200% auto',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        backgroundClip: 'text'
                                                    },
                                                    children: "Blog"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                            className: "text-[#d1d5db] text-[16px] sm:text-[18px] leading-relaxed mb-8 font-['Poppins:Regular',sans-serif]",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.4,
                                                duration: 0.8
                                            },
                                            children: "The latest news, articles, and resources on fashion, body positivity, and finding your perfect fit."
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                            lineNumber: 256,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.6,
                                                duration: 0.8
                                            },
                                            className: "max-w-2xl mx-auto",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-4 top-1/2 -translate-y-1/2 text-[#999999]",
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 273,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Search articles...",
                                                        value: searchQuery,
                                                        onChange: (e)=>setSearchQuery(e.target.value),
                                                        className: "w-full pl-12 pr-4 py-4 rounded-[16px] bg-white text-[#222222] placeholder:text-[#999999] font-['Poppins:Regular',sans-serif] text-[15px] focus:outline-none focus:ring-2 focus:ring-[#b2833a] transition-all"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 274,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                lineNumber: 272,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-full h-12 sm:h-16",
                                    viewBox: "0 0 1440 120",
                                    preserveAspectRatio: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z",
                                        fill: "#ffffff"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                        lineNumber: 289,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                lineNumber: 287,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                        lineNumber: 200,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:grid lg:grid-cols-[1fr_320px] lg:gap-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                            initial: {
                                                opacity: 0,
                                                y: 30
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.2,
                                                duration: 0.6
                                            },
                                            className: "group relative bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(178,131,58,0.15)] transition-all duration-500 mb-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "lg:grid lg:grid-cols-2 lg:gap-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-[280px] sm:h-[320px] lg:h-full overflow-hidden",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10",
                                                                initial: {
                                                                    opacity: 0.6
                                                                },
                                                                whileHover: {
                                                                    opacity: 0.4
                                                                },
                                                                transition: {
                                                                    duration: 0.4
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$ImageWithFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                                src: blogPosts[0].image,
                                                                alt: blogPosts[0].title,
                                                                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 px-[-32px] py-[0px]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "absolute top-6 left-6 z-20",
                                                                initial: {
                                                                    scale: 0,
                                                                    rotate: -12
                                                                },
                                                                animate: {
                                                                    scale: 1,
                                                                    rotate: 0
                                                                },
                                                                transition: {
                                                                    delay: 0.5,
                                                                    type: 'spring',
                                                                    stiffness: 200
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-[#b2833a] text-white px-4 py-2 rounded-[12px] shadow-lg font-['Poppins:SemiBold',sans-serif] text-[12px] flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                            size: 14
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                            lineNumber: 332,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        "Featured"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                    lineNumber: 331,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 325,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-6 sm:p-8 lg:p-10 flex flex-col justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-4 mb-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#b2833a]/10 text-[#b2833a] rounded-[8px] font-['Poppins:SemiBold',sans-serif] text-[12px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                                size: 12
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                                lineNumber: 343,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            blogPosts[0].category
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                        lineNumber: 342,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center gap-1.5 text-[#999999] font-['Poppins:Regular',sans-serif] text-[13px]",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                                size: 13
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                                lineNumber: 347,
                                                                                columnNumber: 25
                                                                            }, this),
                                                                            blogPosts[0].date
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                        lineNumber: 346,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 341,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-[#222222] mb-3 group-hover:text-[#b2833a] transition-colors duration-300",
                                                                children: blogPosts[0].title
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[#666666] font-['Poppins:Regular',sans-serif] text-[15px] leading-relaxed mb-4",
                                                                children: blogPosts[0].excerpt
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#999999] font-['Poppins:Medium',sans-serif] text-[13px]",
                                                                        children: blogPosts[0].readTime
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                        lineNumber: 361,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                        className: "inline-flex items-center gap-2 text-[#b2833a] font-['Poppins:SemiBold',sans-serif] text-[14px] group/btn",
                                                                        whileHover: {
                                                                            x: 5
                                                                        },
                                                                        transition: {
                                                                            type: 'spring',
                                                                            stiffness: 400
                                                                        },
                                                                        onClick: ()=>openPostModal(blogPosts[0]),
                                                                        children: [
                                                                            "Read More",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                animate: {
                                                                                    x: [
                                                                                        0,
                                                                                        5,
                                                                                        0
                                                                                    ]
                                                                                },
                                                                                transition: {
                                                                                    duration: 1.5,
                                                                                    repeat: Infinity
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                    size: 16,
                                                                                    className: "group-hover/btn:text-[#D38436] transition-colors"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                                    lineNumber: 376,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                                lineNumber: 372,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                        lineNumber: 365,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 360,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid sm:grid-cols-2 gap-6 sm:gap-8",
                                            children: blogPosts.slice(1).map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                                    initial: {
                                                        opacity: 0,
                                                        y: 30
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        y: 0
                                                    },
                                                    transition: {
                                                        delay: 0.3 + index * 0.1,
                                                        duration: 0.6
                                                    },
                                                    className: "group relative bg-white rounded-[20px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(178,131,58,0.15)] transition-all duration-500 hover:-translate-y-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative h-[220px] overflow-hidden",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10",
                                                                    initial: {
                                                                        opacity: 0.6
                                                                    },
                                                                    whileHover: {
                                                                        opacity: 0.3
                                                                    },
                                                                    transition: {
                                                                        duration: 0.4
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                    lineNumber: 396,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$ImageWithFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                                                    src: post.image,
                                                                    alt: post.title,
                                                                    className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                    lineNumber: 402,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute top-4 left-4 z-20",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#b2833a] rounded-[8px] font-['Poppins:SemiBold',sans-serif] text-[11px] shadow-md",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                                size: 11
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                                lineNumber: 411,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            post.category
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                        lineNumber: 410,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                    lineNumber: 409,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                            lineNumber: 395,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-5",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1.5 text-[#999999] font-['Poppins:Regular',sans-serif] text-[12px] mb-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                            lineNumber: 421,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        post.date
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                    lineNumber: 420,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-[#222222] text-[18px] sm:text-[20px] leading-[1.3] mb-3 group-hover:text-[#b2833a] transition-colors duration-300 font-['Playfair_Display:600',serif]",
                                                                    children: post.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                    lineNumber: 425,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-[#666666] font-['Poppins:Regular',sans-serif] text-[14px] leading-relaxed mb-4 line-clamp-2",
                                                                    children: post.excerpt
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                    lineNumber: 429,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between pt-3 border-t border-[#f0f0f0]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-[#999999] font-['Poppins:Medium',sans-serif] text-[12px]",
                                                                            children: post.readTime
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                            lineNumber: 434,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                            className: "inline-flex items-center gap-2 text-[#b2833a] font-['Poppins:SemiBold',sans-serif] text-[13px]",
                                                                            whileHover: {
                                                                                x: 3
                                                                            },
                                                                            onClick: ()=>openPostModal(post),
                                                                            children: [
                                                                                "Read More",
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                                    lineNumber: 444,
                                                                                    columnNumber: 27
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                            lineNumber: 438,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                    lineNumber: 433,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                            lineNumber: 418,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, post.id, true, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                            lineNumber: 385,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                    className: "mt-12 lg:mt-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sticky top-24 space-y-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: 30
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: 0.4,
                                                    duration: 0.6
                                                },
                                                className: "bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[#222222] text-[18px] mb-4 font-['Playfair_Display:600',serif] flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                size: 20,
                                                                className: "text-[#b2833a]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 464,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Popular Posts"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-4",
                                                        children: popularPosts.map((post, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                className: "w-full text-left group",
                                                                whileHover: {
                                                                    x: 5
                                                                },
                                                                transition: {
                                                                    type: 'spring',
                                                                    stiffness: 300
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-start gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "flex-shrink-0 w-8 h-8 bg-[#b2833a]/10 rounded-[8px] flex items-center justify-center text-[#b2833a] font-['Poppins:SemiBold',sans-serif] text-[13px] group-hover:bg-[#b2833a] group-hover:text-white transition-all",
                                                                            children: index + 1
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                            lineNumber: 477,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 min-w-0",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                    className: "text-[#222222] font-['Poppins:Medium',sans-serif] text-[13px] leading-snug mb-1 group-hover:text-[#b2833a] transition-colors line-clamp-2",
                                                                                    children: post.title
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                                    lineNumber: 481,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-[#999999] font-['Poppins:Regular',sans-serif] text-[11px]",
                                                                                    children: [
                                                                                        post.views,
                                                                                        " views"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                                    lineNumber: 484,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                            lineNumber: 480,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                    lineNumber: 476,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, index, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 470,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                initial: {
                                                    opacity: 0,
                                                    x: 30
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    x: 0
                                                },
                                                transition: {
                                                    delay: 0.6,
                                                    duration: 0.6
                                                },
                                                className: "bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-[#222222] text-[18px] mb-4 font-['Playfair_Display:600',serif] flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                                size: 20,
                                                                className: "text-[#b2833a]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 502,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Categories"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 501,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                                                className: "w-full flex items-center justify-between px-4 py-3 rounded-[12px] bg-[#fafafa] hover:bg-[#b2833a]/10 transition-all group",
                                                                whileHover: {
                                                                    x: 5
                                                                },
                                                                whileTap: {
                                                                    scale: 0.98
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[#666666] font-['Poppins:Medium',sans-serif] text-[13px] group-hover:text-[#b2833a] transition-colors",
                                                                        children: category.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                        lineNumber: 514,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex items-center justify-center min-w-[28px] h-6 bg-white rounded-[6px] text-[#999999] font-['Poppins:SemiBold',sans-serif] text-[11px] group-hover:bg-[#b2833a] group-hover:text-white transition-all",
                                                                        children: category.count
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                        lineNumber: 517,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                                lineNumber: 508,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                lineNumber: 495,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: selectedPost && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    className: "fixed inset-0 z-[10000] flex items-center justify-center p-4",
                    onClick: closePostModal,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 bg-black/60 backdrop-blur-sm",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            }
                        }, void 0, false, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                            lineNumber: 542,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                scale: 0.95,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                scale: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                scale: 0.95,
                                y: 20
                            },
                            transition: {
                                duration: 0.3,
                                ease: 'easeOut'
                            },
                            className: "relative w-full max-w-4xl max-h-[90vh] bg-white rounded-[24px] shadow-2xl overflow-hidden",
                            onClick: (e)=>e.stopPropagation(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                    className: "absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-lg transition-colors",
                                    whileHover: {
                                        scale: 1.1,
                                        rotate: 90
                                    },
                                    whileTap: {
                                        scale: 0.9
                                    },
                                    onClick: closePostModal,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 20,
                                        className: "text-[#222222]"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                        lineNumber: 565,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative h-48 sm:h-64 overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                            lineNumber: 570,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$src$2f$components$2f$ui$2f$atoms$2f$ImageWithFallback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageWithFallback"], {
                                            src: selectedPost.image,
                                            alt: selectedPost.title,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                            lineNumber: 571,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute bottom-6 left-6 z-20 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#b2833a] rounded-[8px] font-['Poppins:SemiBold',sans-serif] text-[12px] shadow-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                            lineNumber: 580,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedPost.category
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                    lineNumber: 579,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[#666666] rounded-[8px] font-['Poppins:Regular',sans-serif] text-[12px] shadow-md",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                            lineNumber: 584,
                                                            columnNumber: 21
                                                        }, this),
                                                        selectedPost.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                    lineNumber: 583,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                    lineNumber: 569,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-y-auto max-h-[calc(90vh-16rem)] sm:max-h-[calc(90vh-18rem)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 sm:p-8 lg:p-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-[#222222] mb-3 font-['Playfair_Display:700',serif] text-[28px] sm:text-[32px] lg:text-[36px] leading-tight",
                                                        children: selectedPost.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 595,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4 text-[#999999] font-['Poppins:Regular',sans-serif] text-[14px]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: selectedPost.readTime
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                            lineNumber: 599,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                        lineNumber: 598,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                lineNumber: 594,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#666666] font-['Poppins:Regular',sans-serif] text-[16px] leading-relaxed mb-8 pb-8 border-b border-[#f0f0f0]",
                                                children: selectedPost.excerpt
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                lineNumber: 604,
                                                columnNumber: 19
                                            }, this),
                                            selectedPost.fullContent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Workspace$2f$new$2f$style$2d$my$2d$fit$2d$customer$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "blog-post-content prose prose-lg max-w-none",
                                                dangerouslySetInnerHTML: {
                                                    __html: selectedPost.fullContent
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                                lineNumber: 610,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                        lineNumber: 592,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                            lineNumber: 550,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                    lineNumber: 533,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Workspace/new/style-my-fit-customer-app/src/app/blog/page.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_s(BlogPage, "8vcQ8bfCk1F1YAaYN4wAASdqLAw=");
_c = BlogPage;
var _c;
__turbopack_context__.k.register(_c, "BlogPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Workspace_new_style-my-fit-customer-app_src_a5c77396._.js.map