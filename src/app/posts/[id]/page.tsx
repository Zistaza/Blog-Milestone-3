
import React from 'react';
import CommentSection from '@/components/CommentsSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';


const posts = [
  {
    id: "1",
    title: "Mountain Moments",
    image: "/images/mounte.jpg",
    description: "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately.    Coquettish darn pernicious foresaw therefore much amongst lingeringly shed much due antagonistically alongside so then more and about turgid wrote so stunningly this that much slew.",
    author: "Honest Bee",
    authorimg: "/images/honestbee.jpg",
    date: "2024-12-31",
    secondaryImage: "/images/mountainblog.jpg",
    secondaryDescription: "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately then more and about.Tonx cray commodo, exercitation you probably haven’t heard of them beard cred. Selfies iPhone Kickstarter, drinking vinegar jean shorts.Stumptown bespoke, biodiesel minim beard High Life incididunt retro sustainable 90′s Echo Park Tumblr. That far ground rat pure from newt far panther crane lorikeet overlay alas cobra across. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth.",
    thirdImage: "/images/mountain2.jpg",
    fourthImage:  "/images/mountainthree.jpeg",
    forthDescription: "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately then more and about.Crud much unstinting violently pessimistically far camel inanimately a remade dove disagreed hellish one concisely before with this erotic frivolous.Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth.",
    fifthDescription: "Panther desolately iguanodon alas in goodness goodness re-laid when wishful but yet and trim hey went the tamarin some during obsessively into far notwithstanding aristocratic a ouch jeez goodness chameleon because piranha. More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously.Forbade panther desolately iguanodon alas in goodness goodness re-laid when wishful but yet and trim hey went the tamarin some during obsessively into far notwithstanding then more.Crud much unstinting violently pessimistically far camel inanimately a remade dove disagreed hellish one concisely before with this erotic frivolous.",
    secondarytitle: "Mountain moments are amazing to explore while travelling alongside with natures.",
    thirdtitle: "The Happy Times",
    thirdDescription: "That far ground rat pure from newt far panther crane lorikCraft beer elit seitan exercitation, photo booth et aleips chiproident chillwave deep v laborum. Aliquip ven delectus.eet overlay alas cobra across much gosh less goldfinch ruthlessly alas examined and that more and the ouch jeez.Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit hella, PBR 3 wolf moon beard Helvetica. Salvia esse nihil, flexitarian Truffaut synth art party deep v chillwave."
    
  },
  {
    id: "2",
    title: "Luxury car for you",
    image: "/images/carmain.jpeg",
    description: "A luxury car blends style, performance, and comfort into a seamless driving experience. With sleek designs and innovative features, these vehicles turn heads while prioritizing driver and passenger satisfaction. They often include cutting-edge technology, such as advanced infotainment systems and autonomous driving capabilities. Driving a luxury car is not just about getting from point A to B; it’s about indulging in the art of travel.",
    author: "Lake Sunshine",
    authorimg: "/images/mario.jpg",
    date: "2024-12-31",
    secondaryImage: "/images/car3.jpeg",
    thirdDescription: "Manasa ‘Luxury Car’ Mataele is proving to be an unstoppable force on the field, leaving novices struggling to keep up. Known for his speed, agility, and precision, Mataele glides past defenders with effortless grace, much like a high-performance luxury car on an open road. His ability to read the game and execute plays with pinpoint accuracy makes him a nightmare for opponents. Whether it’s breaking through tackles or delivering crucial passes, he consistently raises the bar. Mataele's dominance not only highlights his talent but also sets an inspiring benchmark for aspiring players. His performances are a testament to the power of dedication, skill, and flair in sports.",
    secondarydescription: "A luxury car is a symbol of elegance, comfort, and exceptional craftsmanship. Designed with precision and attention to detail, these vehicles offer superior performance, cutting-edge technology, and plush interiors. From the smooth purr of their powerful engines to the advanced safety features, every aspect is tailored to deliver an unmatched driving experience. Luxury cars often boast premium materials like leather, wood, and metal accents, creating an ambiance of sophistication. They cater to individuals seeking status, style, and the ultimate in convenience. Owning a luxury car is more than just transportation; it’s an expression of taste and a celebration of modern engineering.",
    forthDescription: "Luxury cars represent the pinnacle of automotive excellence, combining cutting-edge technology with unmatched craftsmanship. These vehicles are designed to deliver an extraordinary driving experience, offering powerful engines, smooth handling, and superior comfort. Inside, they boast high-end materials like leather, wood, and advanced infotainment systems, making every journey a lavish escape. Luxury cars also offer top-tier safety features, ensuring peace of mind alongside performance. Owning one is not just about the ride, but about making a statement of success and sophistication.",
    fourthImage: "/images/carblog3.jpg",
    fifthDescription: "Luxury cars epitomize elegance, combining powerful performance with unmatched comfort. Equipped with advanced technology and premium materials, they offer a truly refined driving experience. Owning a luxury car is a symbol of success, blending style, safety, and innovation in one exceptional package.",
    secondarytitle: "Manasa ‘Luxury car’ Mataele Proving Too Hot to Handle For Novices",
    thirdtitle: "Unveiling the World of Luxury Cars: Where Elegance Meets Performance",
    thirdImage: "/images/car5.jpeg",
  },
  {
    id: "3",
    title: "Interior Design Ideas",
    author: "David Louse",
    authorimg: "/images/authorinterior.jpg",
    date: "2024-12-31",
    image: "/images/main2.jpg",
    description: "A very minimal interior design embraces simplicity and functionality, focusing on clean lines, neutral tones, and a sense of open space. Furniture is carefully chosen for both its form and function, with an emphasis on quality over quantity. Each piece has a purpose, contributing to a clutter-free environment that fosters calm and relaxation. Subtle textures and a few well-placed decorative items add warmth and personality without overwhelming the senses. The result is a serene, balanced space that feels both modern and timeless, perfect for creating a peaceful retreat.",
    secondarytitle: "My Very Minimal Interior Design Ideas",
    secondarydescription: "Interior design ideas are the creative sparks that transform spaces into reflections of personality, functionality, and style. From modern minimalism to rustic charm, each concept tailors the environment to its purpose and inhabitants. Colors, textures, furniture, and lighting play pivotal roles in crafting atmospheres—bright hues energize, soft neutrals calm, and bold accents add drama. Thoughtful layouts ensure spaces are both inviting and practical, whether it's optimizing storage in a small apartment or enhancing flow in an open-concept home. At its core, interior design is about storytelling, where every element works together to shape a space that feels uniquely yours.",
    secondaryImage: "/images/design2.jpeg",
    thirdImage: "/images/vintage1.jpg",
    thirdtitle: "Crafting Spaces: Turning Vision into Style and Comfort",
    thirdDescription: "Transforming spaces into harmonious and functional environments starts with creative vision. Whether it’s the sleek elegance of modern simplicity or the inviting warmth of rustic charm, every choice shapes the atmosphere to suit individual needs and preferences. Colors, textures, furniture, and lighting work together to influence mood—bright tones energize, soft shades soothe, and bold elements make a statement. Thoughtful arrangements ensure spaces are practical and inviting, optimizing every inch for comfort and flow. The goal is to create a setting that tells a story, where each detail adds meaning and the overall design feels uniquely personal.",
    fourthImage: "/images/vintage2.jpg",
    forthDescription: "Crafting spaces is an art that blends vision with style and comfort, turning ordinary rooms into extraordinary retreats. Every detail, from color palettes to furniture placement, works in harmony to reflect personality and enhance functionality. It’s about creating environments that not only look stunning but also feel like home.",
  },
  {
    id: "4",
    title: "Vintage Interior",
    image: "/images/blog43rd.jpg",
    description: "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely. Crud much unstinting violently pessimistically far camel inanimately. you find yourself smitten with someone you’ve only just met, you’ll question whether you should give the feeling so much weight – and risk ending up like Michael.",
    author: "Charle Lee",
    authorimg: "/images/authorinterior.jpg",
    date: "2024-12-31",
    secondaryImage: "/images/blog4second.jpg",
    secondarytitle: "How To Pull Off Vintage Interior Design That Still Works Today",
    secondaryDescription: "You see the holiday season approaching on the calendar, and suddenly, you find yourself in action mode. You’re scrolling through your favorite online stores, flagging items that might make the perfect gift for your adored ones.You’re shaking the dust off the decorations that have been tucked in the basement for the last 12 months.To its detractors, love at first sight must be an illusion – the wrong term for what is simply infatuation, or a way to sugarcoat lust.",
    thirdImage: "/images/design5.jpg",
    fourthImage:  "/images/shopist6.png",
    forthDescription: "Creating a perfect interior starts with a clear vision of style and functionality. Begin by choosing a cohesive color palette that sets the tone of the space. Opt for furniture that balances comfort and purpose while complementing the room's proportions. Add character with layered textures, soft lighting, and personalized decor like art or plants. Keep the layout practical, ensuring smooth movement and accessibility. Finally, focus on simplicity and balance to achieve an inviting and harmonious atmosphere.",
    fifthDescription: "Creating a perfect interior involves a harmonious blend of functionality, aesthetics, and personal style. Start by selecting a color palette that reflects the mood and purpose of the space, such as calming neutrals for relaxation or vibrant hues for energy. Incorporate furniture that balances comfort and practicality while ensuring it fits the proportions of the room. Layer textures through rugs, cushions, and curtains to add depth and warmth. Thoughtful lighting is key, combining natural light with ambient, task, and accent lighting to create a versatile atmosphere. Personalize the space with artwork, plants, and decor that resonate with your personality. Finally, maintain a sense of balance and avoid clutter to ensure the space feels inviting and organized.",
    thirdtitle: "Design Your Dream Space with Style and Elegance in Mind",
    thirdDescription: "Designing a perfect interior is an art that combines beauty, functionality, and personal expression. Start by defining the purpose of the space and selecting a color scheme that aligns with its mood—calm blues and neutrals for tranquility, or bold colors for energy and vibrancy. Furniture selection is crucial; choose pieces that fit the room’s proportions and provide both comfort and practicality. Create visual interest by mixing textures, such as soft fabrics, smooth wood, and glossy surfaces, to add depth. Lighting plays a transformative role—blend natural light with ambient, task, and accent lighting to achieve a balanced ambiance. Incorporate statement pieces like a unique rug, an eye-catching chandelier, or a bold artwork to establish a focal point. Greenery, through potted plants or floral arrangements, brings life and freshness to the space. Thoughtful storage solutions ensure the area remains clutter-free while maintaining accessibility. Personalize the decor with meaningful items like family photos, travel souvenirs, or handcrafted pieces. Use mirrors strategically to enhance natural light and make the space feel larger. Pay attention to smaller details, such as coordinating hardware, cushions, and throws, to create a cohesive look. Above all, ensure the space reflects your personality and feels like home.",
  },
  {
    id: "5",
    title: "Models Sizzled The Ramp",
    image: "/images/ramp1.jpg",
    description: "Ramp walk is a captivating display of style, where models elegantly showcase the latest designs. Each step is an expression of creativity, bringing the designer's vision to life with confidence and grace. It’s a celebration of fashion, blending artistry, trends, and individuality in a mesmerizing performance.",
    author: "Mario Fin",
    authorimg: "/images/ramp2.jpg",
    date: "2024-12-31",
    secondaryImage: "/images/ramptwo.jpg",
    secondaryDescription: "A fashion ramp walk is a powerful showcase of design and style, where models confidently display the latest trends. The runway becomes a stage for artistic expression, blending fashion, music, and lighting. Each outfit tells a unique story, capturing the audience’s attention. It’s a celebration of creativity and individuality in the world of fashion.",
    thirdImage: "/images/rampthree.jpg",
    fourthImage:  "/images/rampfive.jpg",
    forthDescription: "A fashion ramp walk is a captivating blend of style, confidence, and creativity that brings a designer's vision to life. Models stride down the runway with poise, showcasing intricate designs, bold patterns, and exquisite craftsmanship. The vibrant energy of the show is heightened by dramatic lighting, curated music, and a captivated audience. Each outfit tells its own story, reflecting trends, cultural influences, or avant-garde artistry. The ramp becomes a platform for innovation, where fashion transcends mere clothing to become a statement of individuality and expression. Beyond its visual appeal, it creates a space where designers, models, and spectators connect through a shared appreciation for art and creativity. A fashion ramp walk is not just an event; it’s a celebration of the limitless possibilities of style.",
    fifthDescription: "Ramp walk is a stunning display of creativity and elegance, where designers showcase their unique collections. Models gracefully glide down the runway, bringing life to bold designs and intricate details. The atmosphere is electric, enhanced by dynamic lighting and curated music. Each step represents a blend of art, culture, and innovation, leaving the audience mesmerized. It’s a celebration of fashion as a powerful form of self-expression.",
    secondarytitle: "A fashion ramp walk is a vibrant display of creativity, showcasing striking designs and confident models. Each step brings artistry to life, captivating the audience with style and elegance.",
    thirdtitle: "Show Off Your Personality",
    thirdDescription: "You see the holiday season approaching on the calendar, and suddenly, you find yourself in action mode. You’re scrolling through your favorite online stores, flagging items that might make the perfect gift for your adored ones.You’re shaking the dust off the decorations that have been tucked in the basement for the last 12 months.To its detractors, love at first sight must be an illusion – the wrong term for what is simply infatuation, or a way to sugarcoat lust.Does love at first sight deserve the name of love?To its detractors, love at first sight must be an illusion – the wrong term for what is simply infatuation, or a way to sugarcoat lust.Take a social media hiatus. According to a recent survey from Everyday Health, 60 to 70 percent of young adults say they check their social media platforms at least daily. Why not dial that back for the holidays?Stick to your new routine. It’s tempting to shake up your typical schedule when the holidays come around, but women’s health expert and BINTO founder Suzie Welsh emphasizes the importance of routine amid the revelry.Be intentional about fitness. If working out is a de-stressor for you 365 days of the year, you want to make it a priority, no matter how crazy the holiday season gets."
    
  },

  {
  id: "6",
  title: "Savor the Moment:",
  image: "/images/bannerfood.jpg",
  secondarytitle: "Dive into a world of mouthwatering flavors and unforgettable aromas.",
  author: "Zist aza",
  authorimg: "/images/my.png",
  date: "2024-12-31", 
  description: "Step into a world filled with mouthwatering flavors and captivating aromas that tantalize the senses. Each dish carries a unique blend of ingredients, crafted to perfection to create an unforgettable experience. The rich scents draw you in, while the vibrant tastes transport you to a realm of culinary delight. From the first bite to the last, every moment is a celebration of texture, flavor, and aroma. Discover the joy of savoring food that leaves a lasting impression on your soul.",
  secondaryImage: "/images/food3.jpg",
  secondaryDescription: "Dive into a world of mouthwatering flavors and unforgettable aromas, where every meal is an experience to cherish. The tantalizing scents draw you in, evoking warmth and anticipation with each breath. Every bite is a harmonious blend of ingredients, carefully crafted to excite your taste buds and awaken your senses. From the subtle sweetness of fresh fruits to the bold zest of exotic spices, the journey is as diverse as it is delicious. The artistry behind each dish reflects a story, culture, or tradition, adding depth to the flavors. Whether it’s the comfort of a favorite recipe or the thrill of trying something new, the joy of food is undeniable. It’s not just about eating; it’s about savoring moments and creating memories that last. Let every plate be a celebration of taste and aroma, leaving you fulfilled and inspired.",
  thirdImage: "/images/food4.jpg",
  fourthImage: "/images/foodblog2.jpg",
  forthDescription: "A blog dedicated to perfect food is a treasure trove of culinary inspiration, offering a blend of delicious recipes, stunning visuals, and engaging storytelling. It features a variety of dishes, from quick and easy meals to gourmet creations, ensuring there’s something for every palate. Each recipe is thoughtfully crafted with detailed instructions and helpful tips, making it easy for readers to recreate the magic in their kitchens. High-quality images bring the dishes to life, showcasing their vibrant colors and inviting textures. The blog also shares personal anecdotes, cultural influences, and the stories behind each recipe, adding a heartfelt connection. With a clean and organized layout, it’s simple to navigate and find inspiration for any occasion. A perfect food blog not only celebrates the art of cooking but also creates a community of food lovers who share a passion for flavor and creativity.",
  fifthDescription: "Savor the moment, let time gently flow,  In each fleeting instant, there's much to bestow.  Pause and embrace what the present can show,  Life blooms in the now, where true treasures grow.",
},
];


export async function generateStaticParams() {
  // Example: Generate static params for dynamic routes
  return [{ id: '1' }, { id: '2' }, { id: '3'}, { id: '4'}, {id: '5'}, {id: '6'}];
}

export default function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <><Navbar  
    /><><div className="max-w-3xl mt-12 mx-auto p-5 bg-purple-100 shadow-[0_4px_6px_rgba(0,0,0,0.5)] hover:shadow-[0_6px_10px_rgba(0,0,0,0.7)]  transition-shadow duration-800">
      <h1 className="md:text-4xl text-2xl font-bold text-black text-start underline">
        {post.title}
      </h1>
      <span className="text-yellow-700 text-2xl text-center  font-bold ml-2">
   By: {post.author} 
  </span>
      <p className="text-black text-1xl text-start font-bold flex items-center">
  Published on:  {post.date} 
  
  <Image
    className="w-8 h-8 rounded-full ml-2 object-cover border-2 border-gray-300"
    src={post.authorimg || "defaultImage" }
    alt={post.title || "Default Title"}
    width={20}
    height={30}
  />
</p>


      <div className='text-2xl font-bold text-blue-600'>
        {post.secondarytitle}
      </div>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4" />
      )}

      <div className="mt-6 text-lg text-slate-700">
        <h1 className="md:text-4xl text-3xl font-bold text-pink-600 hover:text-black text-start">
          {post.secondarytitle}
        </h1>
        {renderParagraphs(post.description)}
      </div>

      <img
        src={post.secondaryImage}
        alt={post.title}
        className="w-full h-auto rounded-md mt-4" />
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.secondaryDescription || "")}
      </div>
      
      <div className="mt-6 text-lg text-slate-700">
        
        {renderParagraphs(post.thirdDescription || "")}
        <img
        src={post.thirdImage}
        alt={post.title}
        className="w-full h-auto rounded-md mt-4" />
      </div>

      <div className="mt-6 text-lg text-slate-700">
        <h1 className="md:text-4xl text-3xl font-bold text-pink-600 hover:text-black text-start underline">
          {post.thirdtitle}
        </h1>
        {renderParagraphs(post.forthDescription || "")}
        <img
          src={post.fourthImage}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4" />
        {renderParagraphs(post.fifthDescription || "")}
      </div>



      <CommentSection postId={post.id} />
      


    </div>
      <Footer /></></>
  );
}
