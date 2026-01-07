import React from 'react';
import BlogDetailsHero from '@/components/BlogDetailsHero';
import BlogContent from '@/components/BlogContent';
import BlogTips from '@/components/BlogTips';
import RelevantBlogs from '@/components/RelevantBlogs';
import Footer from '@/components/Footer';

export default function BlogDetails({ params }) {
    // In a real app, we would use params.slug to fetch data
    return (
        <main>
            <BlogDetailsHero />
            <BlogContent />
            <BlogTips />
            <RelevantBlogs />
            <Footer />
        </main>
    );
}
