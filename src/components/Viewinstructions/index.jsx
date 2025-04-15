"use client";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";

const Viewinstructions = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Breadcrumb pageName="View Instructions" />

      <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <div className="space-y-6">
            {[{ title: "First Name", content: "If the resume contains name in Capital and Small Case both, write any one of them; else write same as given." },
            { title: "Middle Name", content: "Write Middle Name from Full Name in the resume. If Full Name contains initial write initial of the name; but if there is Father’s Name in the resume, write Father’s First Name in Middle Name." },
            { title: "Last Name", content: "If the resume contains name in Capital and Small Case both, write any one of them; else write same as given." },
            { title: "Date of Birth", content: "Date of Birth should be written in the format DD-MM-YYYY (31-01-1991) or DD/MM/YYYY (31/01/1991)." },
            { title: "Gender", content: "Write as per the name; you can write NA if no gender info is given in the resume." },
            { title: "Nationality", content: "Write NA if no Nationality info is given in the resume." },
            { title: "Marital Status", content: "Write as per the info given in resume. If Marriage Date is given write Married." },
            { title: "Passport", content: "Write Passport No. only." },
            { title: "Hobbies", content: "Write Hobbies in one line separating each hobby with comma (,) and space ( ) if the hobbies are written in points or multiple lines or write same as given." },
            { title: "Languages Known", content: "Write Languages Known in one line separating each Languages Known with comma (,) and space ( ) if the Languages Known are written in points or multiple lines or write same as given." },
            { title: "Address", content: "Address will not contain Post Office, Taluka, Tehsil, City, State, Pin code & Country. If multiple addresses are given, Permanent Address should be mentioned." },
            { title: "Landmark", content: "Write NA if no Landmark info is given in the resume." },
            { title: "City", content: "Write City from the address mentioned in the resume. If multiple addresses are given, City Name from Permanent Address should be mentioned." },
            { title: "State", content: "Write State from the address mentioned in the resume. If multiple addresses are given, State Name from Permanent Address should be mentioned." },
            { title: "Pin Code", content: "Write Pin Code from the address mentioned in the resume. If multiple addresses are given, Pin Code from Permanent Address should be mentioned." },
            { title: "Mobile", content: "Write only 10 Digit Mobile Number. If multiple mobile numbers are given write each Mobile Numbers separated with comma (,) and space ( )." },
            { title: "E-Mail ID", content: "Write E-Mail ID as given in the resume. If multiple E-Mail IDs are given write each E-Mail ID separated with comma (,) and space ( )." },
            {
              title: "SSC Result", content: (
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                  <p>Write Result as per below preference:</p>
                  <li>Percentage</li>
                  <li>Grade</li>
                  <li>Division / Class</li>
                  <li>If mentioned Passed then write PASS</li>
                </ul>
              )
            },
            { title: "SSC Board/University", content: "Write the Board/University Name. No School/College Name should be written." },
            { title: "SSC Passing Year", content: "Write Passing Year only without mentioning the Month or Date." },
            {
              title: "HSC Result", content: (
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                  <p>Write Result as per below preference:</p>
                  <li>Percentage</li>
                  <li>Grade</li>
                  <li>Division / Class</li>
                  <li>If mentioned Passed then write PASS.</li>
                  <p>Write Diploma details in HSC. If the resume contains both HSC and Diploma details then write both results separated with comma (,) and space ( ).</p>
                </ul>
              )
            },
            {
              title: "HSC Board/University", content: (
                <div>

                  <p>Write the Board/ University Name. No School / College Name should be written.</p>
                  <p>Write Diploma details in HSC. If the resume contains both HSC and Diploma details then write both Board/University separated with comma (,) and space ( ).
                  </p>
                </div>
              )
            },
            {
              title: "HSC Passing Year", content: (
                <div>
                  <p>Write Passing Year only without mentioning the Month or Date.</p>
                  <p>Write Diploma details in HSC. If the resume contains both HSC and Diploma details then write both Passing Year separated with comma (,) and space ( ).</p>
                </div>
              )
            },
            {
              title: "Graduation Degree", content: (
                <div>
                  <p>Write Degree Name as per the Resume. If candidate is still pursing the degree write same as given in resume.

                  </p>
                  <p>If the resume contains multiple graduation details then write all Degree separated with comma (,) and space ( ).

                  </p>
                </div>
              )
            },
            {
              title: "Graduation Result", content: (
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                  <p>Write Result as per below preference:</p>
                  <li>Percentage / SPI / CGPA / Points
                  </li>
                  <li>Grade</li>
                  <li>Division / Class</li>
                  <li>If mentioned Passed then write PASS.</li>
                  <p>If the resume contains multiple graduation details then write all Results separated with comma (,) and space ( ).

                  </p>
                </ul>
              )
            },
            {
              title: "Graduation University", content: (
                <div>

                  <p>Write the University Name. No College Name should be written.

                  </p>
                  <p>If the resume contains multiple graduation details then write all University separated with comma (,) and space ( ).


                  </p>
                </div>
              )
            },
            {
              title: "Graduation Year", content: (
                <div>

                  <p>
                    Write Passing Year only without mentioning the Month or Date.


                  </p>
                  <p>
                    If the resume contains multiple graduation details then write all Passing Year separated with comma (,) and space ( ).


                  </p>
                </div>
              )
            },
            {
              title: "Post-Graduation Degree", content: (
                <div>

                  <p>
                    Write Degree Name as per the Resume. If candidate is still pursing the degree write same as given in resume.



                  </p>
                  <p>
                    If the resume contains multiple post-graduation details then write all Degree separated with comma (,) and space ( ).



                  </p>
                </div>
              )
            },
            {
              title: "Post-Graduation Result", content: (
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                  <p>Write Result as per below preference:</p>
                  <li>Percentage / SPI / CGPA / Points</li>
                  <li>Grade</li>
                  <li>Division / Class</li>
                  <li>If mentioned Passed then write PASS</li>
                  <p>If the resume contains multiple post-graduation details then write all Results separated with comma (,) and space ( ).

                  </p>
                </ul>
              )
            },
            {
              title: "Post-Graduation University", content: (
                <div>
                  <p>Write the University Name. No College Name should be written.

                  </p>
                  <p>If the resume contains multiple post-graduation details then write all University separated with comma (,) and space ( ).

                  </p>
                </div>)
            },
            {
              title: "Post-Graduation Year", content: (
                <div>
                  <p>Write Passing Year only without mentioning the Month or Date.



                  </p>
                  <p>If the resume contains multiple post-graduation details then write all Passing Year separated with comma (,) and space ( ).


                  </p>
                </div>)
            },
            { title: "Highest Level of Education", content: "n Write Highest Level of Education of the candidate." },
            { title: "Total Work Experience", content: "Calculate the Total Work Experience from the resume. Write in Months or Years. Do not calculate training in the Work Experience. Write 0 for Freshers." },
            { title: "Total Companies Worked for", content: "Write number of companies, the candidate has worked for. Write 0 for Freshers." },
            // { title: "Last/Current Employer", content: "Write Company Name of currently working company or last working company." },
            {
              title: "Last/Current Employer", content: (
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                  <p>Write Result as per below preference:</p>
                  <li>Company Name of currently working company
                  </li>
                  <li>Company Name of Last working company
                  </li>


                </ul>
              )
            },
            ].map((item, index) => (
              <div key={index}>
                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Viewinstructions;