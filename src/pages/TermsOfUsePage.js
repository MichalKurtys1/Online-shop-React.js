import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer";
import classes from "./TermsOfUsePage.module.css";

const TermsOfUse = () => {
  return (
    <>
      <Navigation />
      <div className={classes.container}>
        <div className={classes.imgBox}>
          <div className={classes.opacity}></div>
          <p>Terms of Use</p>
        </div>
        <div className={classes.textBox}>
          <strong>1. Agreement to Terms</strong>
          <p className={classes.normalText}>
            By viewing or using this Website, which can be accessed
            at https://H&M.pl or through our mobile application H&M Online Shop,
            you are agreeing to be bound by all these Website’s Terms of Use and
            agree with any applicable local laws. If you disagree with any of
            these terms, you are prohibited from accessing this Website or using
            the Service. All materials in this Website are protected by trade
            mark law and copyright.
          </p>
          <p className={classes.normalText}>
            For purposes of this Terms of Use, the terms “company”, “we” and
            “our” refers to the Company.
          </p>
          <strong>2. Privacy policy</strong>
          <p className={classes.normalText}>
            We advise you to read our privacy policy INSERT PRIVACY POLICY
            LINK regarding our user data collection. It will help you better
            understand our practices.
          </p>
          <strong>3. Use License</strong>
          <p className={classes.normalText}>
            Permission is granted to temporarily download one copy of the
            materials on our Website for personal, non-commercial transitory
            viewing only. This is the grant of a license, not a transfer of
            title, and under this license you may not:
          </p>
          <p className={classes.normalText}>
            modify or copy the materials;use the materials for any commercial
            purpose or for any public display;attempt to reverse engineer any
            software contained on our Website;remove any copyright or other
            proprietary notations from the materials; ortransferring the
            materials to another person or "mirror" the materials on any other
            server.
          </p>
          <p className={classes.normalText}>
            This will let Company to terminate upon violations of any of these
            restrictions. Upon termination, your viewing right will also be
            terminated and you should destroy any downloaded materials in your
            possession whether it is electronic format or printed.
          </p>
          <strong>4. Disclaimer</strong>
          <p className={classes.normalText}>
            All the materials on our Website are provided on an “as is” basis. 
            You agree that your use of the Website will be at your own risk. We
            make no warranties, may it be expressed or implied, therefore
            negates all other warranties. Furthermore, Company does not make any
            representations concerning the accuracy or reliability of the use of
            the materials on its Website or otherwise relating to such materials
            or any sites linked to this Website.
          </p>
          <strong>5. Limitations</strong>
          <p className={classes.normalText}>
            Company or its suppliers will not be hold accountable for any
            damages that will arise with the use or inability to use the
            materials on our Website, even if we or an authorised representative
            of this Website has been notified, orally or written, of the
            possibility of such damage. Some jurisdiction does not allow
            limitations on implied warranties or limitations of liability for
            incidental damages, these limitations may not apply to you.
          </p>
          <strong>6. Corrections</strong>
          <p className={classes.normalText}>
            There may be information or materials appearing on our Website that
            contains technical, typographical, or photographic errors. We will
            not promise that any of the materials in this Website are accurate,
            complete, or current. We reserve the right to change and update the
            materials contained on its Website at any time without prior notice.
          </p>
          <strong>7. Links</strong>
          <p className={classes.normalText}>
            Company H&M has no control over all links provided on this Website
            and is not responsible for the contents of any such linked site. The
            presence of any link does not imply endorsement of the site by H&M.
            The use of any linked website is at your own risk.
          </p>
          <strong>8. Modification of Terms of Use</strong>
          <p className={classes.normalText}>
            Company may revise or include supplemental terms in these Terms of
            Use on its Website from time to time without prior notice. Please
            ensure that you check the current Terms of Use every time you use
            the Website. By using this Website, you are agreeing to be bound by
            the current version of these Terms of Use.
          </p>
          <strong>9. Applicable law</strong>
          <p className={classes.normalText}>
            Any claim related to our Website shall be governed by the laws of
            Issuance of a License by a Compact Party State without regards to
            its conflict of law provisions.
          </p>
          <strong>10. Contact</strong>
          <p className={classes.normalText}>
            In case of any questions or requests, please contact us at:
          </p>
          <strong>H&M corporation</strong>
          <strong>ul. Henryka Sienkiewicza 22/3</strong>
          <strong>tel. 692 284 490</strong>
          <strong>support@H&M.pl</strong>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUse;
