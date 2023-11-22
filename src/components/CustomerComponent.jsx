import React from "react";

function CustomerComponent(props) {
  return (
    <div className="flex grow flex-col items-stretch max-md:mt-10">
      <h2 className="whitespace-nowrap text-xl leading-7 text-zinc-50">
        Our Customers
      </h2>
      <div
        className="grid grid-cols-2 gap-2 mt-11 pr-1 max-md:mt-10" // Updated code to reduce gap between images
        style={{ placeItems: "center" }} // Add this inline style to center the images
      >
        <div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c37df78b-c5a1-4550-9917-8aaa5433fab2?placeholderIfAbsent=true"
            className="aspect-[1.51] object-contain object-center w-[133px] max-w-full shrink-0 overflow-x-hidden overflow-y-hidden shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px]"
            alt="Customer Image 1"
          />
        </div>
        <div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c37df78b-c5a1-4550-9917-8aaa5433fab2?placeholderIfAbsent=true"
            className="aspect-[1.44] object-contain object-center w-[130px] max-w-full shrink-0 overflow-x-hidden overflow-y-hidden"
            alt="Customer Image 2"
          />
        </div>
        <div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c37df78b-c5a1-4550-9917-8aaa5433fab2?placeholderIfAbsent=true"
            className="aspect-[1.48] object-contain object-center w-[133px] max-w-full shrink-0 overflow-x-hidden overflow-y-hidden"
            alt="Customer Image 3"
          />
        </div>
        <div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c37df78b-c5a1-4550-9917-8aaa5433fab2?placeholderIfAbsent=true"
            className="aspect-[1.51] object-contain object-center w-[133px] max-w-full shrink-0 overflow-x-hidden overflow-y-hidden shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px]"
            alt="Customer Image 4"
          />
        </div>
        <div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c37df78b-c5a1-4550-9917-8aaa5433fab2?placeholderIfAbsent=true"
            className="aspect-[1.48] object-contain object-center w-[133px] max-w-full shrink-0 overflow-x-hidden overflow-y-hidden"
            alt="Customer Image 5"
          />
        </div>
        <div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c37df78b-c5a1-4550-9917-8aaa5433fab2?placeholderIfAbsent=true"
            className="aspect-[1.51] object-contain object-center w-[133px] max-w-full shrink-0 overflow-x-hidden overflow-y-hidden shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.05)_0px_1px_2px_0px]"
            alt="Customer Image 6"
          />
        </div>
      </div>
    </div>
  );
}

export default CustomerComponent;
