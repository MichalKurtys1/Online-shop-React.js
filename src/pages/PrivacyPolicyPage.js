import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer";
import classes from "./PrivacyPolicyPage.module.css";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.imgBox}>
          <div className={classes.opacity}></div>
          <p>Privacy Policy</p>
        </div>
        <div className={classes.textBox}>
          <p className={classes.normalText}>
            At H&M , accessible at https://H&M.pl, one of our main priorities is
            the privacy of our visitors. This Privacy Policy document is
            designed to help you understand how we collect, use and safeguard
            the information you provide to us.
          </p>
          <strong>1. Agreement</strong>
          <p className={classes.normalText}>
            By accessing our website, you you accept our Privacy Policy and
            agree to its INSERT TERMS OF USE LINK.
          </p>
          <strong>2. Information collected</strong>
          <strong>Information collected automatically</strong>
          <p className={classes.normalText}>
            By visiting our Website, our servers automatically collect
            information provided by your browser. This data may include
            information such as IP address, browser type and version, language
            preferences, URLs, the time and date of access and other
            non-personal information.
          </p>
          <strong>
            Information you provide us by registering for an account
          </strong>
          <p className={classes.normalText}>
            To become a subscriber to the Service you will need to create a
            personal profile by registering with the Service. To register you
            will need to enter your email address and create a user name and a
            password. By registering, you are authorizing us to collect, store
            and use your email address in accordance with this Privacy Policy.
          </p>
          <strong>Privacy of children</strong>
          <p className={classes.normalText}>
            The Website does not knowingly collect or solicit information from
            anyone under the age of 13, or allow anyone under the age of 13 to
            sign up for the Service. In the event that we learn that we have
            gathered personal information from anyone under the age of 13
            without the consent of a parent or guardian, we will delete that
            information as soon as possible. If you have reason to believe we
            have collected such information, please contact us at support@H&M.pl
          </p>
          <strong>3. Use and sharing of information</strong>
          <p className={classes.normalText}>
            We do not sell, trade, rent or otherwise share for marketing
            purposes your Personal Information with third parties without your
            consent, except as otherwise stated in this Privacy Policy. We do
            share Personal Information with vendors who are performing services
            for the Company.
          </p>
          <p className={classes.normalText}>
            We may share Personal Information with outside parties if we have a
            good-faith belief that access, use, preservation or disclosure of
            the information is reasonably necessary to meet any applicable legal
            process or enforceable governmental request.
          </p>
          <p className={classes.normalText}>
            In general, we use Non-Personal Information to help us improve the
            Service and customize the user experience. We also aggregate
            Non-Personal Information in order to track trends and analyze use
            patterns on the Site. This Privacy Policy does not limit in any way
            our use or disclosure of Non-Personal Information and we reserve the
            right to use and disclose such Non-Personal Information to our
            partners, advertisers and other third parties at our discretion.
          </p>
          <p className={classes.normalText}>
            In the event we undergo a business transaction, your Personal
            Information may be among the assets transferred. You acknowledge and
            agree that such transfers may occur and are permitted by this
            Privacy Policy, and that any acquirer of our assets may continue to
            process your Personal Information as set forth in this Privacy
            Policy. We recommend that you check the Website periodically to stay
            updated on how your information is used.
          </p>
          <strong>4. Protection measures</strong>
          <p className={classes.normalText}>
            We implement security measures designed to protect your information
            from unauthorized access. Your account is protected by your account
            password. We further protect your information from potential
            security breaches by implementing certain technological security
            measures. However, these measures do not guarantee that your
            information will not be accessed, disclosed, altered or destroyed by
            breach of such firewalls and secure server software. By using our
            Service, you acknowledge that you understand and agree to assume
            these risks.
          </p>
          <strong>User rights regarding the use of personal information</strong>
          <p className={classes.normalText}>
            You have the right at any time to prevent us from contacting you for
            marketing purposes.  When we send a promotional communication to a
            user, the user can opt out of further promotional communications by
            following the unsubscribe instructions provided in each promotional
            email.
          </p>
          <strong>Link to other Websites</strong>
          <p className={classes.normalText}>
            As part of the Service, we may provide links to other websites or
            applications that are not owned or controlled by us. Please be aware
            that we are not responsible for the privacy practices employed by
            those websites or the information or content they contain. This
            Privacy Policy applies solely to information collected by us through
            the Site and the Service. We encourage you to read the privacy terms
            of other websites before proceeding to use them.
          </p>
          <strong>5. Changes and amendments</strong>
          <p className={classes.normalText}>
            We reserve the right to change this policy and our Terms of Use at
            any time. We will notify our Privacy Policy changes by sending you
            an email to the contact information you have provided. Please check
            periodically the Website for updates.
          </p>
          <strong>6. Cookies</strong>
          <p className={classes.normalText}>
            H&M and Services may use third-party analytics tools that uses
            ‘cookies'. The information is used to improve the users' experience
            and monitor the Website and Services performance.
          </p>
          <strong>7. Contact</strong>
          <p className={classes.normalText}>
            In case of any questions or concerns regarding this Policy or the
            practices of this Website, we encourage you to contact us at:
          </p>
          <strong>H&M corporation</strong>
          <strong>ul. Henryka Sienkiewicza 22/3</strong>
          <strong>tel. 692 284 490</strong>
          <strong>support@H&M.pl</strong>
          <p className={classes.normalText}>Last updated on 01/01/2022</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
