# Lorne Zhang - Portfolio Website

A modern, scalable portfolio website built with React 19, TypeScript, Tailwind CSS, and deployed using SST (Serverless Stack).

## 🚀 Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v7
- **Deployment**: SST (Serverless Stack) on AWS
- **Hosting**: AWS S3 + CloudFront

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── pages/           # Page components (Bio, Projects, Career)
│   ├── components/      # Reusable components (Layout, Navigation)
│   ├── hooks/           # Custom React hooks
│   ├── assets/          # Images and static files
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── sst.config.ts        # SST deployment configuration
├── vite.config.ts       # Vite build configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ and npm
- AWS account (for deployment)
- AWS CLI configured with credentials

### Installation

```bash
# Install dependencies
npm install
```

### Running Locally

```bash
# Start development server (runs on http://localhost:5173)
npm run dev
```

### Building for Production

```bash
# Type-check and build
npm run build

# Preview production build locally
npm run preview
```

## 🚢 Deployment with SST

### First-Time Setup

1. **Install AWS CLI** (if not already installed):
   ```bash
   # macOS
   brew install awscli

   # Or download from https://aws.amazon.com/cli/
   ```

2. **Configure AWS credentials**:
   ```bash
   aws configure
   # Enter your AWS Access Key ID, Secret Access Key, region (e.g., us-east-1)
   ```

3. **Initialize SST** (if needed):
   ```bash
   npx sst init
   ```

### Deploying

```bash
# Deploy to development stage
npm run deploy

# Deploy to production stage
sst deploy --stage production
```

### Managing Your Deployment

```bash
# View deployment info and outputs
sst list

# Remove deployed resources (be careful!)
npm run remove

# View CloudWatch logs
sst logs
```

### Adding a Custom Domain

To use a custom domain (e.g., `lornezhang.com`):

1. **Register domain** in Route 53 or your DNS provider
2. **Update `sst.config.ts`**:
   ```typescript
   domain: {
     name: "lornezhang.com",
     redirects: ["www.lornezhang.com"],
   }
   ```
3. **Deploy**: SST will automatically set up SSL/TLS certificates and configure CloudFront

## 📝 Customization Guide

### Update Bio Page
Edit [src/pages/Bio.tsx](src/pages/Bio.tsx) to update:
- Profile image
- Role descriptions
- About me text
- Technical interests

### Add Projects
Edit [src/pages/Projects.tsx](src/pages/Projects.tsx) to add your projects to the `projects` array:
```typescript
{
  title: 'Your Project',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  link: 'https://project-url.com',
  github: 'https://github.com/...',
}
```

### Update Work Experience
Edit [src/pages/Career.tsx](src/pages/Career.tsx) to modify the `experiences` array with your work history.

### Customize Colors
Edit [tailwind.config.js](tailwind.config.js) to change the color palette:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom color shades
      }
    }
  }
}
```

## 🏗️ Architecture

The site is deployed as a static website on AWS:

- **S3 Bucket**: Hosts the built static files
- **CloudFront**: CDN for fast global delivery
- **Route 53**: DNS management (when using custom domain)
- **ACM**: SSL/TLS certificates (automatic with SST)

SST handles all infrastructure provisioning and deployment automatically.

## 📦 Available Scripts

- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to AWS using SST
- `npm run remove` - Remove deployed AWS resources

## 🔧 Environment Variables

To add environment variables:

1. Create `.env` file (gitignored):
   ```
   VITE_API_URL=https://api.example.com
   ```

2. Update `sst.config.ts`:
   ```typescript
   environment: {
     VITE_API_URL: process.env.VITE_API_URL,
   }
   ```

3. Access in code:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

## 🎨 Design System

- **Typography**: Uses Inter for body text and Barlow for headings
- **Color Scheme**: Clean, professional palette with blue primary color
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Components**: Reusable card-based layout with consistent spacing

## 📄 License

Private - All rights reserved

## 👤 Contact

Lorne Zhang
- Portfolio: [Deployed URL after running `npm run deploy`]
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using modern web technologies
