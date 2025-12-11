import { format } from 'date-fns';
import Link from 'next/link';
import React from 'react';

interface BlogPostProps {
    title: string;
    summary: string;
    date: Date;
    id: string | number;
    category: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, summary, date, id, category }) => {
    return (
        <div key={id} className="bg-white rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100"></div>
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium bg-brand-100 text-brand-700 px-2 py-1 rounded">
                        {category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                        {format(date, "MMMM d, yyyy")}
                    </span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-muted-foreground mb-4">{summary}</p>
                <Link href={`/blog/${id}`} className="text-sm font-medium text-brand-500 hover:text-brand-700 transition-colors">
                    Read more →
                </Link>
            </div>
        </div>
    );
};

export default BlogPost;