import React from "react";

interface props{
    id:String,
    image:string,
    heading:String,
    description:String
}

export default function Card(props:props) {

  return (
    <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.image || "https://tailus.io/sources/blocks/twocards/preview/images/man.jpg"}
        alt="art cover"
        loading="lazy"
        width="1000"
        height="667"
        className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl"
      />
      <div className="sm:w-7/12 pl-0 p-5">
        <div className="space-y-2">
          <div className="space-y-4">
            <h4 className="text-2xl font-semibold text-cyan-900">
              {props.heading.substring(0,50)}...
            </h4>
            <p className="text-gray-600">
              {props.description.substring(0,100)}...
            </p>
          </div>
         
        </div>
        <a href="#" className="block w-max text-cyan-600">
            Read more
          </a>
      </div>

    </div>
  );
}
