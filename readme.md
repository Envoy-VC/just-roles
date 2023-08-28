# Just Roles

Just Roles is a project that provides on-chain verifiable roles based on the Lens Protocol followers. Users can create their own communities and set different roles for different thresholds, such as 0-100 followers. It utilizes the Phala Lens Oracle to obtain verifiable data from the API. Users can also add new roles upon contract deployment and edit existing roles.

This project was made for **DevDAO x Phala Network Hackathon** and took inspiration from a well know role management platform [Guild.xyz](https://guild.xyz)

---

## Features ✨

- On-chain verifiable roles based on Lens Protocol followers
- Creation of communities with customizable roles and thresholds
- Integration with the Phala Lens Oracle for obtaining verifiable data
- Ability to add and edit roles upon contract deployment

---

## How It Works 🛠️

1. User fills in details such as community name, logo, details, role information, and a Phat Attestor address.
2. The Phat Attestor address is whitelisted for callbacks to the contract.
3. A new contract is deployed on Polygon Mumbai with the specified roles.
4. Users can access roles through the community page, once the `getRole` method is called the Phat Oracle listens for the transaction and makes a callback transaction with the data.
5. Using that data the appropriate role is assigned to the user.

---

## Screenshots 📸

<table>
  <tr>
    <td valign="top" width="50%">
      <br>
      <img src="https://i.ibb.co/T4k1MYK/1.png" alt="Homepage" >
    </td>
    <td valign="top" width="50%">
      <br>
      <img src="https://i.ibb.co/pxJsLth/2.png" alt="Community Page" >
    </td>
  </tr>
</table>

---

## Video Demo 🎥

![Just Roles](https://i.ibb.co/549Tqxc/og.png)

https://youtu.be/v43G7w5a0bM

---

## Tech Stack 💻

- [Polybase](https://polybase.xyz/) - Data Storage
- [thirdweb](https://thirdweb.com/) - Wallet Connection + Smart Contracts
- [antd](https://ant.design/) - UI Design
- [Phat Brics](https://bricks.phala.network/) - Lens API Ora
- [Next.js](https://nextjs.org/) + [TypeScript](https://www.typescriptlang.org/) - Front-end

---

## Getting Started 🚀

### 📝 Smart Contract

To get started with Just Roles smart contracts, follow these steps:

1. Navigate to the `contract` directory and locate the contracts under the `contracts` folder.
2. Install the necessary dependencies by running the following command:
   ```bash
   npm install
   ```
3. To deploy the contract, you can run the following command
   ```bash
   npx thirdweb deploy
   ```
   or go to the Published Contracts page and deploy in two simple Clicks.
   [Published Contract](https://thirdweb.com/0xBF4979305B43B0eB5Bb6a5C67ffB89408803d3e1/LensRoles)

Additionally, there is already a deployed contract on the Polygon Mumbai with the contract address:

```
0xb62Fc459119f6ba5c3bE63Eb8a42fd5F572ab536
```

You can view the Contract in the [explorer](https://mumbai.polygonscan.com/address/0xb62Fc459119f6ba5c3bE63Eb8a42fd5F572ab536)

https://mumbai.polygonscan.com/address/0xb62Fc459119f6ba5c3bE63Eb8a42fd5F572ab536

---

### 📱 Just Roles Frontend

To get started with the Just Roles frontend app, follow these steps:
Navigate to the app directory and install the necessary dependencies by running the following command:

```bash
npm install
```

Create a new file called `.env.local` in the root directory of the `app`. This file will contain the required environment variables.
Inside the `.env.local` file, add the following environment variables:

```bash
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=''
NEXT_PUBLIC_POLYBASE_NAMESPACE=''
```

To obtain the thirdweb Client Id, you can visit the [thirdweb Dashboard](https://thirdweb.com/dashboard) and retrieve the API key from there.

Similarly, for the Polybase Namespace, you can create your namespace at [Polybase Explorer](https://explorer.testnet.polybase.xyz/), The schema can be found in `app/schema` directory.

Once you have filled in the environment variables in the `.env.local` file, you can start the development server by running the following command:

```bash
npm run dev
```

Open your web browser and navigate to http://localhost:3000 to access the Just Roles app.

By following these steps, you will be able to set up and run the Just Roles front-end app on your local development environment.

---
