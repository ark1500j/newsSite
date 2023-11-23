import Card from "@/components/card";
import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

async function getData() {
  const res = await fetch(
    "https://newsdata.io/api/1/news?apikey=pub_333435ab0e77a7d9092d57e53c0639958bf65&q=technology"
  );
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="mx-auto">
      <Navbar />
      <main className="bg-gray-100">
        <section>
          <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 px-11 lg:pt-10 mx-auto">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">
                Welcome to <span className="text-[#2563EB]">Edit</span> News
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">
                Stay informed, stay empowered, your go-to source for breaking
                news, in-depth analysis, and stories that matter. We believe in
                delivering news that goes beyond the headlines, providing you
                with the context and insights you need to navigate our
                ever-changing world.
              </p>
              <div>
                <button className="py-2 px-4 bg-transparent text-[#2563EB] font-semibold border border-[#2563EB] rounded hover:bg-[#2563EB] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0">
                  Read me
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-[90%] flex items-center justify-center p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="exciting-news-animate.svg" alt="" />
            </div>
          </div>
        </section>
        <section>
          <div className="py-16 bg-gray-100">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="mb-12 space-y-2 text-center">
                <span className="block w-max mx-auto px-3 py-1.5 border border-green-200 rounded-full bg-[#2564ebc2] text-[]">
                  Blog
                </span>
                <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">
                  Sharing is Caring
                </h2>
                <p className="lg:w-6/12 lg:mx-auto">Lorem ipsum dolor sit amet consectetur dolorum recusandae nulla sum laudantium dolor vitae asperiores, in consequatur nam.
                </p>
              </div>

              <div className="grid gap-12 lg:grid-cols-2">
                {data && data.results.map((item: any) => {
                    return (
                      <Card
                        key={item.article_id}
                        id={item.article_id}
                        image={item.image_url}
                        description={item.description}
                        heading={item.title}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
