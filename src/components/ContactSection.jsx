import React from 'react';

export default function ContactSection() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:mt-0 col-span-6">
            <form action="#" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-transparent sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="mt-1 focus:ring-primary focus:border-primary block w-full p-1 shadow-sm sm:text-sm border-gray-700 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white"
                      >
                        Email Address
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="mt-1 focus:ring-primary focus:border-primary block w-full p-1 shadow-sm sm:text-sm border-gray-700 rounded-md"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-white"
                      >
                        Message
                      </label>
                      <textarea
                        name="message"
                        className="mt-1 focus:ring-primary focus:border-primary block w-full p-1 shadow-sm sm:text-sm border-gray-700 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <div class="my-3 d-flex justify-content-center booking-info-container">
    //     <div class="booking-info text-center">
    //       <h5>Booking</h5>
    //       <a href="https://red11music.com/dylan-wheeler/" target="_blank">
    //         <div id="booking-logo"></div>
    //       </a>
    //     </div>
    //   </div>
    //   <form name="contact" method="POST" data-netlify="true">
    //     <div class="mb-3">
    //       <label for="name" class="form-label">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         name="name"
    //         id="name"
    //         aria-describedby="name"
    //         required
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="email" class="form-label">
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         class="form-control"
    //         name="email"
    //         required
    //         id="email"
    //         aria-describedby="emailHelp"
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="message" class="form-label">
    //         Message
    //       </label>
    //       <textarea
    //         type="text"
    //         class="form-control"
    //         name="message"
    //         required
    //         id="message"
    //       ></textarea>
    //     </div>

    //     <button type="submit" class="btn btn-primary">
    //       <span>Submit</span>
    //     </button>
    //   </form>
    // </div>
  );
}
