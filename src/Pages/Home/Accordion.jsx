const Accordion = () => {
  return (
    <div>
      <div className="container w-full max-w-[1229px] px-4 mx-auto">
        <h2 className="text-[32px] text-[#171717] font-semibold leading-[40px] text-center mt-20 mb-16">
          Frequently asked Questions
        </h2>

        <div className="collapse collapse-plus bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title font-semibold">
            Why SteadFast Courier?
          </div>
          <div className="collapse-content text-sm">
            SteadFast Courier stands out for its commitment to delivering
            parcels nationwide on time and without any hassle. We pride
            ourselves on offering fast payment, easy tracking, a dedicated
            customer service team, and ensuring the safe delivery of your
            parcels.
          </div>
        </div>

        <div className="collapse collapse-plus mt-4 bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            What is the coverage area of steadfast Courier?
          </div>
          <div className="collapse-content text-sm">
            SteadFast Courier extends its services across 8 divisions, 495
            Upazilas, and 330 Municipal Corporations. Click here for a
            comprehensive list of detailed service locations.
          </div>
        </div>

        <div className="collapse collapse-plus mt-4 bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            What services does Steadfast Courier provide?
          </div>
          <div className="collapse-content text-sm">
            Revel in the excellence of E-commerce delivery, pick-and-drop ,
            cutting-edge warehousing, entrust your goods to our state-of-the-art
            warehousing, and witness perfection in packaging solutions.
          </div>
        </div>

        <div className="collapse collapse-plus mt-4 bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title font-semibold">
            Want to know about your delivery charges?
          </div>
          <div className="collapse-content text-sm">
            Revel in the excellence of E-commerce delivery, pick-and-drop ,
            cutting-edge warehousing, entrust your goods to our state-of-the-art
            warehousing, and witness perfection in packaging solutions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
