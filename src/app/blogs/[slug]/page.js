import React from 'react';
import BlogDetailsHero from '@/components/BlogDetailsHero';
import BlogContent from '@/components/BlogContent';
import BlogTips from '@/components/BlogTips';
import RelevantBlogs from '@/components/RelevantBlogs';
import Footer from '@/components/Footer';

export default async function BlogDetails({ params }) {
    console.log("BlogDetails Page - Params:", params);
    const { slug } = await params;
    let post = null;

    try {
        const adminUrl = process.env.NEXT_PUBLIC_ADMIN_URL || 'http://localhost:3000';
        console.log("Fetching blog details from:", `${adminUrl}/api/public/blogs/${slug}`);

        // Ensure we're fetching from a valid URL
        const res = await fetch(`${adminUrl}/api/public/blogs/${slug}`, {
            cache: 'no-store'
        });

        console.log("Fetch response status:", res.status);

        if (res.ok) {
            post = await res.json();
            console.log("Fetched post:", post ? post.id : "null");
        } else {
            console.error("Fetch failed:", await res.text());
        }
    } catch (error) {
        console.error("Error fetching blog details:", error);
    }

    if (!post) {
        return (
            <main style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h1>Post not found</h1>
            </main>
        );
    }

    return (
        <main>
            <BlogDetailsHero post={post} />
            <BlogContent post={post} />
            <BlogTips />
            <RelevantBlogs currentPostId={post.id} />
            <Footer />
        </main>
    );
}
