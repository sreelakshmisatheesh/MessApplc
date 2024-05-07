import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div className={"w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"}>
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
      <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
      <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
      Privacy Policy: We collect personal information such as name, email address, and IP address to improve our website and send newsletters. We do not share this information with third parties without consent, except as required by law. Our use of cookies and tracking technologies is outlined in our Cookie Policy. Users can access, update, or delete their personal information upon request. We comply with data protection laws.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Terms of Service: By using our website, you agree to our terms and conditions, including restrictions on illegal activities and harassment. Intellectual property rights are outlined, and we disclaim liability for any damages incurred. Governing law and dispute resolution procedures apply.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Cookie Policy: Our website uses cookies for functional, analytical, and advertising purposes. Users can manage cookie preferences through browser settings.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Security Measures: We use industry-standard security measures such as SSL encryption to protect user information.
        </p>
        <br />
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
        Contact Information: For inquiries about our policies, contact us at [email address] or through our contact form.
        </p>
        <br />
      </ul>
      </div>
    </div>
  );
};

export default Policy;
