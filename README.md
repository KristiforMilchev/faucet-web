# Shadowkeep Faucet UI

This is the front-end for the Shadowkeep EVM Faucet, built using Angular 17. The faucet allows users to claim test ETH (Ether) on the Shadowkeep blockchain network. The UI is designed to connect to a wallet, interact with the faucet backend, and request test tokens. The interface is user-friendly and responsive, ensuring that users can easily connect their wallets and manage their token claims.

**Note:** This UI requires the accompanying Go-based backend service to function properly. The backend handles the actual token distribution and transaction management.

## Features

- **Wallet Connection**: Users can connect their Ethereum-compatible wallets (e.g., MetaMask) to interact with the faucet.
- **Token Request**: Users can request test tokens from the faucet.
- **Network Information**: Displays network details such as the network name, RPC URL, port, symbol, and explorer link.
- **Copy to Clipboard**: Users can easily copy network details with a click.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- Angular CLI installed
- The Go-based backend for the faucet is up and running

## Getting Started

### Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/kristiformilchev/faucet-web.git
cd faucet-web
```

### Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### Update Environment Configuration

Make sure to update the environment configuration for the Angular app to match your backend setup.

Ensure the API URL is correctly pointed to the Go backend server and you set your own walletconnect api key.

Create .evn file in the top level directory of the solution and add your values inside of it.

```
  WalletConnect = 'walletconnect api key',
  ApiUrl = 'https://faucet.blockcert.net'
```

### Running the Application

To run the Angular development server, use the following command:

```bash
ng serve
```

This will start the app on `http://localhost:4200/` by default.

### Building for Production

To build the application for production, run:

```bash
ng build --prod
```

The production build will be placed in the `dist/` folder. You can then deploy this to any static hosting service or integrate it with your backend.

## Backend Setup

This front-end application is designed to work with the Go-based backend for the faucet. The backend is responsible for processing token requests, handling authentication, and managing wallet interactions. Ensure the backend is set up and running correctly before starting the UI.

To set up the backend:

1. Clone the Go-based backend repository.
2. Follow the instructions in the backend's README to set it up and start the service.

Make sure the backend is reachable at the URL specified in the environment configuration of this Angular app.

## Folder Structure

Here's a brief overview of the folder structure for this project:

```bash
src/
├── app/                    # Angular components and services
│   ├── views/             # Footer component for network details
│   └── components                 # Other components
├── assets/                 # Static assets (images, fonts, etc.)
├── environments/           # Environment configuration files
├── index.html              # Main HTML entry point
└── main.ts                 # Main Angular bootstrap file
```

## Deployment

To deploy this application, you can follow these general steps:

1. Build the application using `ng build --prod`.
2. Deploy the contents of the `dist/` folder to your hosting service (e.g., AWS S3, GitHub Pages, Firebase Hosting).
3. Ensure your Go backend is accessible by the UI on the production server.

## Troubleshooting

If you encounter issues, consider the following steps:

- **CORS Issues**: Ensure that your Go backend is configured to allow CORS requests from the domain where your Angular application is hosted.
- **API Connection**: Double-check the API URL in your environment configuration.
- **Wallet Connection**: Ensure the wallet connection is being made to the correct network, and that MetaMask or your chosen wallet provider is set up correctly.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and make changes as you'd like. Submit a pull request for review.

## Acknowledgments

- **Angular**: The powerful front-end framework used to build this UI.
- **Go**: For the backend implementation that powers the faucet functionality.
- **MetaMask**: For simplifying Ethereum wallet integration.

---

With this setup, you're ready to get your Shadowkeep Faucet UI up and running. Happy coding! 🎉
