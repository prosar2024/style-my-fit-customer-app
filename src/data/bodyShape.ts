import { Search, ShoppingBag, TrendingUp } from "lucide-react";

export const bodyShapes = [
    {
        name: 'The Hourglass',
        subtitle: 'Balanced Symmetry',
        characteristics: 'The Hourglass is defined by a balanced bust and hips with a dramatically cinched waist. This guide focuses on highlighting this natural definition through silhouettes that embrace your curves while maintaining proportion.',
        keyFeatures: ['Balanced bust & hips', 'Defined waist', 'Proportionate shoulders'],
        stylingTips: 'Emphasize your waist with belted styles, wrap dresses, and fitted silhouettes.',
        image: 'images/body_shape_guide/hourglass.png',
        color: '#b2833a'
    },
    {
        name: 'The Pear',
        subtitle: 'Graceful Proportion',
        characteristics: 'The Pear silhouette features hips wider than the bust, creating a beautiful foundation. Our approach celebrates these proportions by drawing attention upward while honoring your natural curves.',
        keyFeatures: ['Narrow shoulders', 'Defined waist', 'Fuller hips & thighs'],
        stylingTips: 'Balance your silhouette with detailed necklines, structured shoulders, and A-line skirts.',
        image: 'images/body_shape_guide/pear.png',
        color: '#D38436'
    },
    {
        name: 'The Apple',
        subtitle: 'Elegant Presence',
        characteristics: 'The Apple shape carries weight beautifully through the midsection with gorgeous legs. We focus on creating vertical lines and highlighting your best assets—your legs, shoulders, and décolletage.',
        keyFeatures: ['Broader shoulders', 'Fuller midsection', 'Slender legs'],
        stylingTips: 'Empire waists, V-necklines, and flowing fabrics create an elegant, elongated silhouette.',
        image: 'images/body_shape_guide/apple.png',
        color: '#8B6F47'
    },
    {
        name: 'The Rectangle',
        subtitle: 'Athletic Grace',
        characteristics: 'The Rectangle features balanced measurements throughout, creating a naturally streamlined silhouette. Our styling philosophy adds dimension through strategic layering and thoughtful tailoring.',
        keyFeatures: ['Similar bust & hip width', 'Subtle waist definition', 'Athletic build'],
        stylingTips: 'Create curves with peplums, ruffles, and color blocking. Layer to add dimension.',
        image: 'images/body_shape_guide/rectangle.png',
        color: '#A67C52'
    },
    {
        name: 'The Inverted Triangle',
        subtitle: 'Powerful Elegance',
        characteristics: 'The Inverted Triangle showcases broader shoulders and bust with narrower hips—a naturally powerful silhouette. We create harmony by adding volume below while showcasing your strong upper body.',
        keyFeatures: ['Broad shoulders', 'Fuller bust', 'Narrow hips'],
        stylingTips: 'Balance with A-line skirts, wide-leg trousers, and detailed lower half pieces.',
        image: 'images/body_shape_guide/hourglass.png',
        color: '#9B7B5C'
    }
];

export const processSteps = [
    {
        number: '01',
        title: 'Identify',
        description: 'Take our quick, visually-driven quiz to accurately determine your body shape.',
        icon: Search
    },
    {
        number: '02',
        title: 'Analyze',
        description: 'Our proprietary algorithm cross-references your shape with thousands of styling rules and current trends.',
        icon: TrendingUp
    },
    {
        number: '03',
        title: 'Style',
        description: 'Receive a curated, shoppable style guide with personalized outfit recommendations and tips tailored to your proportions.',
        icon: ShoppingBag
    }
];