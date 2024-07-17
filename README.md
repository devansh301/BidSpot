# BidSpot

BidSpot is an auction website where users can auction items and place bids. The website is built using Next.js, PostgreSQL, Drizzle, AWS S3, Shadcn, and Zod. Authentication is handled using NextAuth with Google authentication. The site allows users to add items for auction, including item name, image, starting price, and ending date. Signed-in users can place bids on these items.

## Features

- User authentication with Google using NextAuth.
- Add items for auction with item name, image, starting price, and ending date.
- Place bids on items.
- Local development environment using Docker for PostgreSQL.
- Deployed on Vercel.

## Tech Stack

- **Frontend**: Next.js, Shadcn
- **Backend**: Next.js API routes, PostgreSQL, Drizzle ORM
- **Authentication**: NextAuth (Google)
- **Storage**: AWS S3
- **Validation**: Zod
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js
- Docker
- AWS account (for S3)
- Google account (for OAuth)
- PostgreSQL

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bidspot.git
   cd bidspot
   ```

2. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   DATABASE_URL="postgresql://postgres:example@localhost:5432/postgres"
   AUTH_DRIZZLE_URL="postgresql://postgres:example@localhost:5432/postgres"
   NODE_ENV="development"
   AWS_ACCESS_KEY_ID=<your-aws-access-key-id>
   AWS_SECRET_ACCESS_KEY=<your-aws-secret-access-key>
   AWS_REGION=<your-aws-region>
   S3_BUCKET_NAME=<your-s3-bucket-name>
   AUTH_SECRET=<your-auth-secret>
   AUTH_GOOGLE_ID=<your-google-client-id>
   AUTH_GOOGLE_SECRET=<your-google-client-secret>
   ```

3. Start PostgreSQL using Docker:

   ```bash
   docker-compose up -d
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

   The website will be available at [http://localhost:3000](http://localhost:3000).


## Usage

1. Sign in using your Google account.
2. Add an item for auction by providing the item name, image, starting price, and ending date.
3. View listed items and place bids on them.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
