import Link from "next/link";
import { format } from "date-fns";
import BlogPost from "@/components/ui/atoms/blogPost";

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: "Understanding Your Body Shape and Fashion Choices",
            excerpt: "Learn how identifying your body shape can transform your fashion choices and style confidence.",
            date: new Date(2025, 2, 15),
            category: "Style Tips"
        },
        {
            id: 2,
            title: "The Science Behind Perfect Fit Clothing",
            excerpt: "Discover how technology is changing the way we shop for clothes online with better fit predictions.",
            date: new Date(2025, 3, 8),
            category: "Technology"
        },
        {
            id: 3,
            title: "Sustainable Fashion: Making Ethical Choices",
            excerpt: "How choosing well-fitted clothing reduces returns and contributes to sustainable fashion practices.",
            date: new Date(2025, 4, 22),
            category: "Sustainability"
        }
    ];

    return (
        <div className="container pt-32 pb-16">
            <h1 className="text-4xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-muted-foreground mb-8">
                The latest news, articles, and resources on fashion, body positivity, and finding your perfect fit.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                    <BlogPost key={post.id} id={post.id} title={post.title} summary={post.excerpt} date={post.date} category={post.category} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
