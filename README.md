# Loan-Lending-Platorm
A web application based on node.js with mongoDB database deployed on Microsoft Azure cloud with an aim to provided customer to customer interaction for loan exchange. The application is hosted on Microsoft Azure, the Virtual Machine deployed on the cloud starts the frontend server at port: 3000. The backend is hosted on port: 5000. The website was once hosted on microsoft azure, but our subscription ended (sad noices).

The website is currently hosted at
```
https://loan-lending-platorm.vercel.app/
```

The Database and the flow chart for the website is represented as:
<br>
<img src = "https://user-images.githubusercontent.com/77623755/167654827-a254250c-85a3-427a-b0ea-ff14b5426cec.jpeg" />

<br>

<h1>The characteristics of the platform are:</h1>
<ul>
  <li>
    <b>Elimination of middle men :</b>
    <br>
    The platform is a customer to customer based personal loan lending system. <b>Each user can act as a borrower as well as a lender</b>, thus providing a self helping community which contributes towards mutual growth.
  </li>
  <li>
    <b>Secure and efficient mangement of data :</b>
    <br>
    <p> The data is easily available on the user profile. Borrower can <b>reach a large audience </b>at once and thus his/her chance of getting an optimal offer are increased. </p>
    <p>The user login is secured in the database with his password being stored as a hash value. </p>
  </li>
  <li>
    <b>Secured Investment: </b>
    <br>
    <p>The CRED score of the user which is generated according to their previous transactions gives insight in the <b>credibility of the borrower</b>. The EMI and penalty on the user is also handled by the application thus easing the whole process for both parties.</p>
  </li>
  </ul>
  <br>
<h1>Components of the website</h1> 
<ul>
  <li>
    <b>Login and SignUp</b>
    <br>
     Exisiting users can access the website using login, while new users must sign up. The sign up is a <b>two step process</b>. The user is prompted to upload his photo and salary slips within 24 hours of the registration time, if he fails to do so, the user is deleted. This ensure <b>no bogus accounts </b>are created.
  </li>
  
  <li>
    <b>Profile </b>
    <br>
    The profile displays the credentials of the user along with his transaction history. The transaction history includes <b>all the loan offers and requests </b>ever made by the user.
  </li>
  <li>
    <b>Requests</b>
    <br>
    This is available to each user. Loan request consists of the previous loan/borrowing requests. The option to <b>Post a new loan request</b> is also provided here.
  </li>
  <li>
    <b>Offers</b>
    <br>
    This contains all the offers or the bargains to the <b>current/active</b> loan request of the user. The user can now <b>accept or reject</b> the offers according to his/her choices.
  </li>
  <li>
    <b>Loans</b>
    <br>
    The loan section contains two informations:
    <ul>
      <li>
        <b>Lended Loans</b>
          <br>
        This contains all the loans which are <b>currently</b> lended out by the user. 
      </li>
      <li>
        <b>Borrowed Loans</b>
        <br>
        Set of data contains all the <b>active</b> loans of the user.
     
   <em>The maintainence of data in this way provides maximum accessbility to the user, for he can access all his transactions in the same place.</em>
      </li>
    
  <li>
    <b>Market </b>
    <br>
    <p> The market is the place where <b>all the users interact</b> with each other. It contains all the loan requests by each user. On each loan request, the other users can "bargain" on the conditions asked by the borrower. </p>
  </li>
      
  <li>
    <b>Notifications</b>
    <br>
    <p>One place for the user to get all the updates. The notification includes information about :
      <ul>
        <li>If the loan offer generated by the user has been accepted or not. Providing the user with the rejection allows him to make another bid at the loan and thus maintains a <b>healthy and active market</b>.</li>
        <li>One day before the EMI deadline, the <b>user is reminded</b>. This ensures that he never missed the EMI. </li>
        <li>The <b>confirmation after paying the EMI</b> is also logged in the notifications.</li>
        <li>In case <b>penalty is imposed</b>, the user is notified about the same- each day till he pays his EMI</li>
    </ul>
    <br>
    <img src = "https://user-images.githubusercontent.com/77777434/167668689-8f0d64f6-5f33-42fb-8503-9ab35daccb19.jpeg" />
    
     The user is also sent an email, along with the notification. 
    
  </ul>
  <br>
  <h1>Operations </h1>
  <ul>
    <li>
      <b>Bid </b>
      <p>Bid or bargain is the reaction offer by a potential lender to a loan request. The <b>lender changes some parameters</b> of the loan request and sends to the borrower. The borrower now consider all the "bids" against his loan and chooses which suits him the best. The borrower is free to reject all the loan offers. </p>
      <p>Any user can make multiple "bids" against a loan request. This provides a free and flexible conversation between the parties. A rejection of a "bid" notifies the bid maker of the rejection and thus he/she can change his bid accordingly. </p>
    </li>
    <li>
    <b> EMI </b>
    <br>
      The borrower repays the debt in <b>small amounts paid periodically</b>. The EMI is calculated by the service. If the borrower fails to abide by the deadline, <b>penalty is imposed</b> which is proportional to the excess time taken.
    </li>
    <li>
      <b> Credibility (CRED) score </b>
      <br>
      <p>The "trust factor" of any user can be derived from his/her CRED score. This score is based on the previous history of tracnsaction by the user. A user who has paid his/her loans and EMIs on time will have more CRED score than other users. This ensures the security of investment by the lender.</p>
  </li>
  </ul>
    
<h1>Interaction and transaction are :</h1>
<ul>
  <li><b>Loan requests : </b></li>
    Each user can "request" for a loan. In this, he has to specify: 
    <ul>
      <li><b>Amount (INR) </b> he want to borrow.</li>
      <li><b>Interest rate (%) </b> he is expecting. </li>
      <li><b>Time (months) </b> for which he wants the loan. </li>
        </ul>
  After all this, other users can see his request in the <b>market</b> and then make a "bid" on the offer. 
  The charateristics of a loan request are:
  <ul>
    <li>The user can have <b>only one active loan request</b> at a time. </li>
    <li>There can be <b>multiple bids</b> against a loan request</li>
    <li>If the user agrees with the offer against his request, he can accept it and the loan processing would start. The request is removed from the market after this. </li>
    <li>Each <b>request has a lifetime of 20 days</b>. After this, the loan request is <b>removed</b> from the market.</li>
    <li>All of the loan requests by a user are <b>saved against his user id</b> in his all time transactions and are visible on his profile</li>
    <li>On the loan, if the user abides by the EMIs and the deadline, his <b>CRED score is  increased, else decreament</b> happen.
      
  </ul>
  </li>
  
<li>
  <b>Bidding</b>
  </li>
<p>
  The bidding on any loan request can be done using the <b>button provided on each card</b>. This ensure <b>ease of accessibility</b> for the bidder.
  </p>
  </li>
  
  <li><b>Paying EMI</b></li>
  <p>
    The user's EMI is pre generated. At the time of deadline, the user has to go to his <b>active loans</b> i.e. on the <b>loan</b> page and click on <b>PayEMI</b> button.
  </p>
  </li>
  </ul>

<h1>Technologies used</h1>
<ul>
  <li>Node.js</li>
  <li>React.js</li>
  <li>React Bootstrap</li>
  <li>Microsoft Azure</li>
  <li>Express.js</li>
  <li>MongoDB</li>
 </ul>
 
    
## Clone Repository 
```sh
git clone --recursive git@github.com:ShisuiMadara/Loan-Lending-Platorm.git
```

<p align="center">
  OR
 </p>

```sh 
git clone --recursive https://github.com/ShisuiMadara/Loan-Lending-Platorm.git
```

## Running server
```sh
npm install
cd frontend
npm install
cd ..
./run
```
## Site demo and pages
<h2> User Profile </h2>
<br>
<img src="https://user-images.githubusercontent.com/92878027/167650199-e5075a89-8d74-4fa9-8ed8-43f436b1132c.jpg" />
<br>


<h2> Salary Slips </h2>
<br>
<img src = "https://user-images.githubusercontent.com/92878027/167650198-1609e41f-7e74-4d9d-a91a-28b940652ba0.jpg" />
<br>


<h2> Loan Offers </h2>
<br>
<img src = "https://user-images.githubusercontent.com/92878027/167650192-fd2a6336-5822-4437-bda0-b8d66f38c42d.jpg" />
<br>


<h2> Money Lended </h2>
<br>
<img src = "https://user-images.githubusercontent.com/92878027/167650114-16a295b6-acdc-432c-8960-b9992f3ad333.jpg" />
<br>

<h2> Request Creation </h2>
<br>
<img src = "https://user-images.githubusercontent.com/92878027/167650185-8308500e-1fbb-4ca3-8844-25b2e9bc1165.jpg" />
<br>

<h2> Generated Request </h2>
<br>
<img src = "https://user-images.githubusercontent.com/92878027/167650205-95704f1d-e552-4161-8aa5-418f765421d3.jpg" />
<br>

<h2> Money Borrowed </h2>
<br>
<img src = "https://user-images.githubusercontent.com/92878027/167650202-88433c6f-6ed6-42f1-ac0d-750de6f99039.jpg" />
<br>








