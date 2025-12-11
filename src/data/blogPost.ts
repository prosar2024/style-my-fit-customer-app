export interface BlogPost {
    id: number;
    category: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
    featured?: boolean;
    readTime?: string;
    fullContent?: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        category: 'Style Tips',
        date: 'March 15, 2025',
        title: 'Understanding Your Body Shape and Fashion Choices',
        excerpt: 'Learn how identifying your body shape can transform your fashion choices and style confidence.',
        image: "/images/blog/style.png",
        featured: true,
        readTime: '5 min read',
        fullContent: `
      <p>Every body is unique and beautiful in its own way. Understanding your body shape is not about conforming to standards, but about celebrating what makes you, you. When you know your body shape, you can make fashion choices that enhance your natural features and boost your confidence.</p>
      
      <h3>The Five Main Body Shapes</h3>
      <p>Fashion experts typically categorize body shapes into five main types: Rectangle, Triangle (Pear), Inverted Triangle, Hourglass, and Apple. Each shape has its own beautiful characteristics and understanding yours helps you choose clothing that flatters your figure.</p>
      
      <h4>Rectangle Body Shape</h4>
      <p>If your shoulders, waist, and hips are relatively similar in width, you likely have a rectangle body shape. This athletic build looks amazing in clothing that creates curves and defines the waist. Try belted dresses, peplum tops, and fit-and-flare styles.</p>
      
      <h4>Triangle (Pear) Body Shape</h4>
      <p>With hips wider than shoulders, the pear shape is incredibly feminine. Emphasize your upper body with statement necklines, bright colors on top, and darker bottoms. A-line skirts and wide-leg pants are your best friends.</p>
      
      <h4>Inverted Triangle Body Shape</h4>
      <p>Broader shoulders with narrower hips create this strong, athletic silhouette. Balance your proportions with V-necks, A-line skirts, and details that draw attention to your lower half.</p>
      
      <h4>Hourglass Body Shape</h4>
      <p>With balanced shoulders and hips and a defined waist, the hourglass shape shines in fitted clothing. Wrap dresses, high-waisted styles, and anything that cinches at the waist will accentuate your curves beautifully.</p>
      
      <h4>Apple Body Shape</h4>
      <p>Carrying weight around the midsection with slimmer legs, apple shapes look fantastic in empire waist dresses, V-necklines that elongate the torso, and styles that skim over the middle while showing off those gorgeous legs.</p>
      
      <h3>Fashion Tips for Every Body Shape</h3>
      <p>Regardless of your body shape, certain universal principles apply. Always prioritize fit over size - a well-fitted garment in a larger size looks better than squeezing into something too small. Invest in quality undergarments that provide proper support and create a smooth silhouette.</p>
      
      <h3>The Power of Proportions</h3>
      <p>Understanding proportions is key to dressing your body shape. If you're petite, avoid overwhelming your frame with oversized pieces. If you're tall, embrace maxi lengths and longer layers. The goal is to create visual balance that makes you feel confident and comfortable.</p>
      
      <h3>Embrace Your Shape with StyleMyFit</h3>
      <p>Our revolutionary technology takes the guesswork out of finding clothes that fit and flatter your unique body shape. By analyzing your measurements and body type, we provide personalized recommendations that help you look and feel your absolute best. Fashion should be fun, not frustrating - and with the right knowledge and tools, you can build a wardrobe you love.</p>
    `,
    },
    {
        id: 2,
        category: 'Technology',
        date: 'April 8, 2025',
        title: 'The Science Behind Perfect Fit Clothing',
        excerpt: 'Discover how technology is changing the way we shop for clothes online with better fit predictions.',
        image: '/images/blog/technology.png',
        readTime: '7 min read',
        fullContent: `
      <p>Online fashion shopping has come a long way since its inception. What started as a risky proposition - buying clothes without trying them on - has evolved into a sophisticated industry powered by cutting-edge technology. Today, artificial intelligence and machine learning are revolutionizing how we find the perfect fit.</p>
      
      <h3>The Problem with Traditional Sizing</h3>
      <p>Anyone who's shopped for clothes knows the frustration: you're a size 10 in one brand, a size 12 in another, and a medium in yet another. Traditional sizing is inconsistent, outdated, and fails to account for the beautiful diversity of human bodies. This leads to high return rates, waste, and frustrated customers.</p>
      
      <h3>How AI Analyzes Your Body Shape</h3>
      <p>Modern body shape analysis uses sophisticated algorithms that go far beyond simple measurements. By analyzing key data points - shoulder width, bust, waist, hips, and more - AI can determine not just your size, but your unique body proportions and shape category.</p>
      
      <h3>Machine Learning and Fit Prediction</h3>
      <p>Machine learning models are trained on millions of data points from real customers. They learn which garments fit which body types, taking into account factors like fabric stretch, cut, and design. The more data the system processes, the more accurate its predictions become.</p>
      
      <h3>The Database of Perfect Fits</h3>
      <p>Behind every great fit recommendation is a comprehensive database. This database contains detailed information about thousands of garments - their measurements, how they drape, how the fabric behaves, and real customer feedback about fit. When you input your measurements, the system compares them against this database to find your perfect matches.</p>
      
      <h3>Virtual Try-On Technology</h3>
      <p>The future of online shopping includes augmented reality and virtual try-on features. Using your smartphone camera, you can see how clothes will look on your body before you buy. This technology creates a digital representation of you and overlays clothing items in real-time.</p>
      
      <h3>Reducing Returns and Environmental Impact</h3>
      <p>Better fit prediction doesn't just benefit customers - it's crucial for sustainability. The fashion industry generates massive waste through returns. When customers can confidently choose items that will fit, return rates drop dramatically, reducing the environmental impact of shipping and packaging.</p>
      
      <h3>The StyleMyFit Advantage</h3>
      <p>Our platform combines all these technologies into one seamless experience. From initial body shape analysis to personalized recommendations, we're using science and technology to ensure you get clothes that fit perfectly the first time. No more guesswork, no more disappointment - just fashion that works for your unique body.</p>
      
      <h3>The Future is Personalized</h3>
      <p>As technology continues to advance, the shopping experience will become increasingly personalized. Imagine a future where every online store knows your exact measurements and preferences, where virtual fitting rooms are as accurate as physical ones, and where every purchase fits perfectly. That future is closer than you think, and it's being built today with innovations in AI, machine learning, and computer vision.</p>
    `,
    },
    {
        id: 3,
        category: 'Sustainability',
        date: 'May 22, 2025',
        title: 'Sustainable Fashion: Making Ethical Choices',
        excerpt: 'How choosing well-fitted clothing reduces returns and contributes to sustainable fashion practices.',
        image: '/images/blog/sustainability.png',
        readTime: '6 min read',
        fullContent: `
      <p>The fashion industry is one of the world's largest polluters, responsible for 10% of global carbon emissions and 20% of wastewater. But there's a less-discussed contributor to this problem: returns. Every year, billions of items are returned, creating a massive environmental footprint through transportation, repackaging, and often, disposal.</p>
      
      <h3>The Return Rate Crisis</h3>
      <p>Online fashion retailers face return rates as high as 30-40%, with poor fit being the number one reason. Each return means double the shipping emissions, extra packaging waste, and significant energy consumption. Many returned items, especially those from fast fashion brands, end up in landfills rather than being resold.</p>
      
      <h3>How Perfect Fit Reduces Waste</h3>
      <p>When you find clothes that fit perfectly the first time, you keep them. This simple fact has profound environmental implications. Reducing returns by even 10% would save millions of tons of CO2 emissions annually. Technologies that help predict fit accurately are therefore crucial sustainability tools.</p>
      
      <h3>Quality Over Quantity</h3>
      <p>Sustainable fashion isn't just about materials - it's about mindset. When you invest in well-fitting, quality pieces that you'll wear for years, you reduce your overall consumption. A smaller wardrobe of perfect fits is more sustainable than a closet full of ill-fitting fast fashion.</p>
      
      <h3>The True Cost of Fast Fashion</h3>
      <p>Fast fashion's environmental impact extends beyond manufacturing. The business model encourages overconsumption, with trendy pieces designed to be worn a few times and discarded. Poor quality and inconsistent sizing lead to higher return rates and shorter garment lifespans.</p>
      
      <h3>Sustainable Materials Matter</h3>
      <p>Choosing clothing made from sustainable materials - organic cotton, recycled polyester, Tencel, hemp, or linen - reduces environmental impact. But even the most sustainable fabric becomes waste if the garment doesn't fit and gets returned or discarded.</p>
      
      <h3>The Circular Fashion Economy</h3>
      <p>The future of fashion is circular - designing with end-of-life in mind, using recyclable materials, and creating systems for garment repair, resale, and recycling. Well-fitting clothes are more likely to be worn, loved, repaired, and eventually passed on or recycled, keeping them in the circular economy longer.</p>
      
      <h3>Ethical Manufacturing Practices</h3>
      <p>Sustainable fashion also means fair wages and safe working conditions for garment workers. By supporting brands with ethical manufacturing practices and reducing overconsumption through better fit, we contribute to positive change throughout the fashion supply chain.</p>
      
      <h3>Your Role in Sustainable Fashion</h3>
      <p>As consumers, we have power. Every purchase is a vote for the kind of fashion industry we want. By prioritizing fit, quality, and sustainability over trends and quantity, we drive industry change. Use technology to find perfect fits, invest in quality pieces, care for your clothes properly, and choose brands aligned with your values.</p>
      
      <h3>StyleMyFit's Commitment to Sustainability</h3>
      <p>By helping you find clothes that fit perfectly the first time, we're reducing returns and their environmental impact. Our technology promotes mindful consumption - buying less but better. We believe the most sustainable garment is one you'll wear and love for years, and we're committed to helping you find exactly that.</p>
    `,
    },
];

export const popularPosts = [
    { title: 'Top 10 Fashion Trends for 2025', views: '12.5K' },
    { title: 'How to Build a Capsule Wardrobe', views: '9.8K' },
    { title: 'The Ultimate Guide to Body Measurements', views: '8.2K' },
    { title: 'Color Theory in Fashion', views: '7.1K' },
];

export const categories = [
    { name: 'Style Tips', count: 24 },
    { name: 'Technology', count: 18 },
    { name: 'Sustainability', count: 15 },
    { name: 'Body Positivity', count: 21 },
    { name: 'Fashion Trends', count: 32 },
];