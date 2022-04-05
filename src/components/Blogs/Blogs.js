import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='blogs-describe'>
            <div className='blogs'>
                <h1>What is Context API?</h1>
                <p>Context API is used for avoide prop drilling. Context API is used when the data needs globally. We use Context in theme, preferred language, current authenticated user. It allows components to get data from a context rather than from props. </p>
            </div>
            <div className='blogs'>
                <h1>What is Sementic Tag?</h1>
                <p>Sementic Tag is the Tag by which elements are describe clearly and makes more readable. Some Semetic Tags are, header, article, section, nav. For using Semantic raking of SEO will increase. Finding code is easier but without sementic need to many code.Easily we can interpret the organization of the sreen reader and assistive devices.</p>
            </div>
            <div className='blogs'>
                <h1>Difference between Inline, Inline-block, block.</h1>
                <p><h6>Inline</h6> It cannot set the width and height. The elements doesnot starts in new line only occupy with width it required</p>
                <p><h6>Inline-Block</h6>It is almost similar feature line Inline, the only difference is it can set the width and height.</p>
                <p><h6>Block</h6> It can set the width and height. The elements starts in new line only and occupy with full width it required</p>
            </div>

        </div>
    );
};

export default Blogs;