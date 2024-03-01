# Aurora Web

[Aurora Web](https://www.auroraweb.com.au/) is my portfolio website that showcases the skills and projects of a web developer (me!). It is built with React, Next.js, Framer Motion, and Tailwind CSS. It features a responsive design, smooth animations, and a functional contact form.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository and navigate into the directory.

```bash
git clone https://github.com/JacobYZ/aurora-web.git
cd repository
```

2. Install the dependencies.

```bash
npm install
```

3. Copy the `.env.example` file and rename it to `.env`.

```bash
cp .env.example .env
```

4. Open the `.env` file and replace the placeholders with your actual values.

```shell
NEXT_PUBLIC_SERVICE_ID=your_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_public_key
```

5. Start the development server.

```bash
npm run dev
```

Remember to replace `your_service_id`, `your_template_id`, and `your_public_key` with your actual EmailJS service ID, template ID, and public key, respectively.

## Usage

To use this project as a template for your own portfolio, you can customize the following files:

- `public/images`: Replace the images with your own photos or logos.
- `app/constants`: Update the data with your own information, such as name, bio, skills, projects, etc.
- `app/`: Modify the pages with your own content and layout, etc.

To view the website, open http://localhost:3000 in your browser. You can navigate between the home, about, portfolio, and contact pages using the menu. You can also send a message using the contact form, which will be delivered to your email address using EmailJS.

## Contributing

Contributions are welcome. If you want to suggest a feature or report a bug, please open an issue. If you want to make a pull request, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Make your changes.
4. Push your branch: `git push origin feature-name`.
5. Create a pull request.

## License

This project is licensed under the MIT License.
