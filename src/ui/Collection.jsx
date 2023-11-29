import React from "react";

const Collection = () => {
  return (
    <div className="my-10  bg-[url(/images/collection-bg.png)] bg-cover bg-center bg-no-repeat px-4 xl:px-28 ">
      <div className="flex h-[580px]  items-center justify-between md:flex-row">
        <div className="md:w-1/2">d</div>
        <div className="md:w-1/2">
          <img src="/images/zara-logo.png" alt="ZARA logo" />
          <p className="my-8 text-lg capitalize leading-[32px] text-white md:w-2/3">
            Lustrous yet understated. The new evening wear collection
            exclusively offered at the reopened Giorgio Armani boutique in Los
            Angeles.
          </p>
          <button className="rounded-sm bg-white px-6 py-2 font-semibold text-Black ">
            see collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
