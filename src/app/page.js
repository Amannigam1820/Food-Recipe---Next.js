import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // return (
  //   <div>
  //     <h1>Welcome to recipe app</h1>
  //     <Link href={'/recipe-list'}>Explore recipes</Link>
  //   </div>
  // );
  return (
    <div>
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            MyWebsite
          </div>
          <div className="space-x-4">
            <Link href="/recipe-list" className="text-white">Explore recipes</Link>
            
          </div>
        </nav>
      </header>
      
      <main className="container mx-auto my-10 p-4">
        <section className="text-center my-20">
          <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover amazing content and get to know more about us.
          </p>
          <Link href="/about" className="bg-blue-500 text-white px-4 py-2 rounded">Learn More</Link>
        </section>
        
        <section className="my-20">
          <h2 className="text-3xl font-bold mb-4">Featured Recipes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="border p-4">
              <h3 className="text-xl font-bold">Recipe 1</h3>
              <p className="text-gray-700">Description of recipe 1.</p>
            </div>
            <div className="border p-4">
              <h3 className="text-xl font-bold">Recipe 2</h3>
              <p className="text-gray-700">Description of recipe 2.</p>
            </div>
            <div className="border p-4">
              <h3 className="text-xl font-bold">Recipe 3</h3>
              <p className="text-gray-700">Description of recipe 3.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-800 p-4 text-center text-white">
        &copy; 2024 MyWebsite. All rights reserved.
      </footer>
    </div>
  );
}
