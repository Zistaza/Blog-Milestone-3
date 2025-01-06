import React from 'react';
import Card from '../components/Card';

export default function Mega() {
  const posts = [
    {
      id: "1",
      title: "Mountain Moments",
      description: "Mountain moments are amazing to explore while travelling alongside with natures...",
      date: "2024-12-31",
      author: "Honest Bee",
      authorimg: "/images/honestbe.jpg",
      imageUrl: "/images/mountainblog.jpg",
      
    },

    {
      id: "2",
      title: "Luxury car for you",
      description: "Manasa ‘Luxury car’ Mataele Proving Too Hot to Handle For Novices",
      date: "2024-12-31",
      author: "Lake Sunshine",
      authorimg: "/images/mario.jpg",
      imageUrl: "/images/Carblogmain.jpg",
    },

    {
      id: "3",
      title: "Interior Design Ideas",
      description: "Crud much unstinting violently pessimistically far camel inanimately a remade dove disagreed.",
      date: "2024-12-31",
      author: "David Louse",
      authorimg: "/images/authorinterior.jpg",
      imageUrl: "/images/blog3main.jpg",
    },

    {
      id: "4",
      title: "Vintage Interior",
      description: "How To Pull Off Vintage Interior Design That Still Works Today",
      date: "2024-12-31",
      author: "Carley Lee",
      authorimg: "/images/authorvintage.jpg",
      imageUrl: "/images/shoplist7.png",
    },

    {
      id: "5",
      title: "Models Sizzled The Ramp",
      description: "Models Sizzled The Ramp at a Fashion Show in LA Fashion Week",
      date: "2024-12-31",
      author: "Mario Fin",
      authorimg: "/images/ramp2.jpg",
      imageUrl: "/images/ramp1.jpg",
    },
    {
      id: "6",
      title: "Savor the Moment:",
      description: "Dive into a world of mouthwatering flavors and unforgettable aromas.",
      date: "2024-12-31",
      author: "Zist aza",
      authorimg: "/images/my.png",
      imageUrl: "/images/blogfood1.jpg",
    },
  ]

  return (
    <div className='my-8'>
      <div className='grid grid-col-1 sm:grid-col-2 lg:grid-cols-3 gap-8'>
        {posts.map((posts, index) =>(
          <div className='fade-in' key={posts.id}>
            <div className='blog-card'>
               <Card post={posts} isDarkBackground={index % 2 === 0}/>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}
