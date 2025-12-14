import './LegalPage.css'

const TermsOfService = () => {
  return (
    <section className="legal-page">
      <div className="container">
        <div className="legal-header">
          <h1 className="legal-title">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="legal-date">Last Updated: December 14, 2024</p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the SeenThem mobile application (the "App"), you agree to be bound by these Terms of Service ("Terms"). 
              If you do not agree to these Terms, do not use the App.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you ("User", "you", or "your") and Rushfeldt Løsninger 
              ("we", "us", or "our"), a Norwegian enkeltpersonforetak (ENK).
            </p>
            <p><strong>Service Provider:</strong></p>
            <ul>
              <li><strong>Business Name:</strong> Rushfeldt Løsninger</li>
              <li><strong>Organization Number:</strong> 836771532</li>
              <li><strong>Address:</strong> Hovseterveien 84F, 0768 Oslo, Norway</li>
              <li><strong>Contact Email:</strong> erlendrushf@hotmail.no</li>
              <li><strong>Jurisdiction:</strong> Norway</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. Eligibility</h2>
            
            <h3>2.1 Age Requirement</h3>
            <p>
              You must be at least 13 years old to use the App. By using the App, you represent and warrant that you are 
              at least 13 years of age.
            </p>

            <h3>2.2 Account Registration</h3>
            <p>To use certain features of the App, you must create an account. You agree to:</p>
            <ul>
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Accept responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Description of Service</h2>
            <p>SeenThem is a concert tracking application that allows users to:</p>
            <ul>
              <li>Log concerts they have attended</li>
              <li>View personal concert statistics and history</li>
              <li>Connect with friends and view shared concert experiences</li>
              <li>Discover new concerts and venues</li>
              <li>Rate and review concerts</li>
              <li>Access premium features through a one-time purchase</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. User Accounts and Authentication</h2>
            
            <h3>4.1 Account Creation</h3>
            <p>
              Account creation requires a valid email address. Authentication is provided through Microsoft Azure CIAM 
              using email-based one-time password (OTP) verification.
            </p>

            <h3>4.2 Username and Display Name</h3>
            <p>You are responsible for choosing an appropriate username and display name that:</p>
            <ul>
              <li>Does not impersonate others</li>
              <li>Does not contain offensive, vulgar, or inappropriate content</li>
              <li>Does not violate any third-party rights</li>
              <li>Complies with applicable laws</li>
            </ul>
            <p>We reserve the right to reject or remove any username or display name that violates these Terms.</p>

            <h3>4.3 Account Security</h3>
            <p>You are solely responsible for maintaining the confidentiality of your account. You agree to:</p>
            <ul>
              <li>Not share your account access with others</li>
              <li>Not use another user's account without permission</li>
              <li>Immediately notify us of any security breach</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. User Content and Conduct</h2>
            
            <h3>5.1 Your Content</h3>
            <p>You retain ownership of content you submit to the App, including:</p>
            <ul>
              <li>Concert reviews and ratings</li>
              <li>Profile information</li>
              <li>Photos</li>
              <li>Comments and interactions</li>
            </ul>

            <h3>5.2 License to Your Content</h3>
            <p>By submitting content to the App, you grant us a worldwide, non-exclusive, royalty-free license to:</p>
            <ul>
              <li>Display your content within the App</li>
              <li>Store and process your content to provide the service</li>
              <li>Share your content according to your privacy settings</li>
            </ul>
            <p>This license terminates when you delete your content or account, except for content that has been shared with other users.</p>

            <h3>5.3 Prohibited Conduct</h3>
            <p>You agree NOT to:</p>
            <ul>
              <li>Post false, misleading, or fraudulent content</li>
              <li>Impersonate any person or entity</li>
              <li>Harass, bully, or threaten other users</li>
              <li>Post content that is illegal, offensive, defamatory, or violates others' rights</li>
              <li>Spam, advertise, or solicit users without permission</li>
              <li>Use automated tools or bots to access the App</li>
              <li>Attempt to gain unauthorized access to the App or other users' accounts</li>
              <li>Reverse engineer, decompile, or disassemble any part of the App</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Collect or harvest user data without consent</li>
              <li>Post content containing malware or viruses</li>
            </ul>

            <h3>5.4 Consequences of Violations</h3>
            <p>We reserve the right to:</p>
            <ul>
              <li>Remove content that violates these Terms</li>
              <li>Suspend or terminate accounts that violate these Terms</li>
              <li>Report illegal activity to law enforcement</li>
              <li>Take legal action against users who violate these Terms</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Privacy and Data Protection</h2>
            <p>
              Your use of the App is also governed by our Privacy Policy, which is incorporated into these Terms by reference. 
              By using the App, you consent to our collection and use of personal data as described in the Privacy Policy.
            </p>

            <h3>6.1 GDPR Compliance</h3>
            <p>
              We comply with the General Data Protection Regulation (GDPR) and Norwegian data protection laws. You have rights 
              regarding your personal data as detailed in our Privacy Policy.
            </p>

            <h3>6.2 Data Deletion</h3>
            <p>You may request deletion of your account and data at any time. Upon deletion request:</p>
            <ul>
              <li>Your account will be immediately hidden from other users</li>
              <li>Your data will be retained for 90 days to allow account recovery</li>
              <li>After 90 days, all data will be permanently deleted</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Premium Features and Purchases</h2>
            
            <h3>7.1 Premium Purchase</h3>
            <p>
              The App offers premium features available through a one-time purchase processed by Apple StoreKit through the App Store.
            </p>

            <h3>7.2 Payment Processing</h3>
            <p>
              All payments are processed by Apple Inc. through the App Store. We do not process or store your payment information.
            </p>

            <h3>7.3 Pricing</h3>
            <p>
              Premium feature pricing is displayed in the App and may vary by region. Prices are subject to change with notice.
            </p>

            <h3>7.4 Refund Policy</h3>
            <p>
              Refunds are available within 48 hours of purchase and are processed by Apple through the App Store. To request a refund:
            </p>
            <ul>
              <li>Contact Apple Support directly</li>
              <li>Or submit a refund request through your App Store purchase history</li>
            </ul>
            <p>After 48 hours, all sales are final unless required by applicable law.</p>

            <h3>7.5 No Subscription</h3>
            <p>The premium purchase is a one-time payment. There are no recurring charges or subscriptions.</p>

            <h3>7.6 Access to Premium Features</h3>
            <p>
              Premium features are tied to your account. If you delete your account, you lose access to premium features and 
              cannot recover or transfer them to a new account.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Intellectual Property Rights</h2>
            
            <h3>8.1 Our Intellectual Property</h3>
            <p>
              The App, including its design, features, functionality, text, graphics, logos, and software, is owned by 
              Rushfeldt Løsninger and is protected by Norwegian and international copyright, trademark, and other intellectual 
              property laws.
            </p>

            <h3>8.2 Limited License</h3>
            <p>
              We grant you a limited, non-exclusive, non-transferable, revocable license to use the App for personal, 
              non-commercial purposes in accordance with these Terms.
            </p>

            <h3>8.3 Third-Party Content</h3>
            <p>
              The App uses data from the Ticketmaster Discovery API. Band and venue information is owned by their respective 
              rights holders.
            </p>

            <h3>8.4 Restrictions</h3>
            <p>You may not:</p>
            <ul>
              <li>Copy, modify, or create derivative works of the App</li>
              <li>Distribute, sell, or transfer the App</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use the App for commercial purposes without our permission</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>9. Third-Party Services</h2>
            
            <h3>9.1 Integration with Third Parties</h3>
            <p>The App integrates with:</p>
            <ul>
              <li>Microsoft Azure CIAM (authentication)</li>
              <li>Ticketmaster Discovery API (band and venue data)</li>
              <li>Apple App Analytics (usage analytics)</li>
              <li>Google Ads (advertising)</li>
              <li>Apple StoreKit (payments)</li>
            </ul>

            <h3>9.2 Third-Party Terms</h3>
            <p>
              Your use of third-party services is subject to their respective terms of service and privacy policies. 
              We are not responsible for third-party services.
            </p>

            <h3>9.3 Advertising</h3>
            <p>
              The App displays advertisements through Google Ads. We do not control the content of third-party advertisements.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Disclaimers and Limitations of Liability</h2>
            
            <h3>10.1 "AS IS" Basis</h3>
            <p>
              THE APP IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
              INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
            </p>

            <h3>10.2 No Warranty</h3>
            <p>We do not warrant that:</p>
            <ul>
              <li>The App will be uninterrupted, secure, or error-free</li>
              <li>The App will meet your requirements</li>
              <li>Any errors will be corrected</li>
              <li>Content or data will be accurate, complete, or reliable</li>
            </ul>

            <h3>10.3 User-Generated Content</h3>
            <p>
              We do not endorse, verify, or guarantee the accuracy of user-generated content, including concert reviews, 
              ratings, or statistics.
            </p>

            <h3>10.4 Limitation of Liability</h3>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY NORWEGIAN LAW:</p>
            <p>
              WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul>
              <li>Loss of profits, data, or goodwill</li>
              <li>Service interruption</li>
              <li>Computer damage or system failure</li>
              <li>Cost of substitute services</li>
            </ul>
            <p>
              OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM THESE TERMS OR YOUR USE OF THE APP SHALL NOT EXCEED THE AMOUNT 
              YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM, OR €100, WHICHEVER IS GREATER.
            </p>

            <h3>10.5 Norwegian Law Exceptions</h3>
            <p>
              Some jurisdictions do not allow the exclusion or limitation of certain warranties or liabilities. If Norwegian law 
              applies to you, the above limitations may not apply to the extent prohibited by mandatory consumer protection laws.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Rushfeldt Løsninger, its owner, and affiliates from any claims, 
              damages, losses, liabilities, and expenses (including legal fees) arising from:
            </p>
            <ul>
              <li>Your use of the App</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any rights of another person or entity</li>
              <li>Your content or conduct on the App</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>12. Termination</h2>
            
            <h3>12.1 Termination by You</h3>
            <p>You may terminate your account at any time by:</p>
            <ul>
              <li>Deleting your account through the App settings</li>
              <li>Contacting us at <a href="mailto:erlendrushf@hotmail.no">erlendrushf@hotmail.no</a></li>
            </ul>

            <h3>12.2 Termination by Us</h3>
            <p>We may suspend or terminate your account immediately, without notice, if:</p>
            <ul>
              <li>You violate these Terms</li>
              <li>We believe your account is being used fraudulently</li>
              <li>We are required to do so by law</li>
              <li>We decide to discontinue the App</li>
            </ul>

            <h3>12.3 Effects of Termination</h3>
            <p>Upon termination:</p>
            <ul>
              <li>Your right to use the App immediately ceases</li>
              <li>Your data will be deleted according to our Privacy Policy</li>
              <li>You lose access to premium features (no refund after 48 hours)</li>
              <li>Provisions that should survive termination will continue to apply</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>13. Changes to Terms</h2>
            
            <h3>13.1 Modifications</h3>
            <p>We reserve the right to modify these Terms at any time. We will notify you of material changes by:</p>
            <ul>
              <li>Posting the updated Terms in the App</li>
              <li>Sending an email notification</li>
              <li>Requiring acceptance of new Terms before continued use</li>
            </ul>

            <h3>13.2 Your Acceptance</h3>
            <p>
              Your continued use of the App after changes become effective constitutes acceptance of the revised Terms. 
              If you do not agree to the changes, you must stop using the App and delete your account.
            </p>
          </section>

          <section className="legal-section">
            <h2>14. Governing Law and Dispute Resolution</h2>
            
            <h3>14.1 Governing Law</h3>
            <p>
              These Terms are governed by and construed in accordance with the laws of Norway, without regard to conflict of law principles.
            </p>

            <h3>14.2 Jurisdiction</h3>
            <p>
              Any disputes arising from these Terms or your use of the App shall be subject to the exclusive jurisdiction of the 
              courts of Oslo, Norway.
            </p>

            <h3>14.3 Consumer Rights</h3>
            <p>
              If you are a consumer in the European Economic Area, you may also have rights under your local consumer protection laws, 
              and nothing in these Terms affects those rights.
            </p>

            <h3>14.4 Dispute Resolution</h3>
            <p>
              Before initiating legal proceedings, we encourage you to contact us at <a href="mailto:erlendrushf@hotmail.no">erlendrushf@hotmail.no</a> to 
              resolve any disputes informally.
            </p>
          </section>

          <section className="legal-section">
            <h2>15. Miscellaneous</h2>
            
            <h3>15.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Rushfeldt Løsninger 
              regarding the App.
            </p>

            <h3>15.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in 
              full force and effect.
            </p>

            <h3>15.3 Waiver</h3>
            <p>
              Our failure to enforce any provision of these Terms does not constitute a waiver of that provision or any other provision.
            </p>

            <h3>15.4 Assignment</h3>
            <p>
              You may not assign or transfer these Terms or your account without our written consent. We may assign these Terms 
              without restriction.
            </p>

            <h3>15.5 Force Majeure</h3>
            <p>
              We are not liable for any failure to perform our obligations due to events beyond our reasonable control, including 
              natural disasters, war, terrorism, strikes, or government actions.
            </p>

            <h3>15.6 Language</h3>
            <p>
              These Terms are provided in English. If translated into other languages, the English version prevails in case of conflicts.
            </p>
          </section>

          <section className="legal-section">
            <h2>16. Contact Information</h2>
            <p>For questions, concerns, or notices regarding these Terms, please contact us:</p>
            <p><strong>Rushfeldt Løsninger</strong></p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:erlendrushf@hotmail.no">erlendrushf@hotmail.no</a></li>
              <li><strong>Address:</strong> Hovseterveien 84F, 0768 Oslo, Norway</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>17. Acknowledgment</h2>
            <p>
              BY USING THE APP, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE.
            </p>
          </section>

          <section className="legal-section">
            <h2>Norwegian Summary (Norsk sammendrag)</h2>
            <p>
              Ved å bruke SeenThem godtar du disse vilkårene for bruk. Du må være minst 13 år gammel. Premium-funksjoner er et 
              engangskjøp med 48 timers refusjonsperiode. Vi kan avslutte din konto ved brudd på vilkårene. Norsk lov gjelder for 
              disse vilkårene. Kontakt oss på erlendrushf@hotmail.no ved spørsmål.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default TermsOfService
