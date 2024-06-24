# Inspection Report Generator

This project is a web-based form for generating Pre/Final Inspection Reports in PDF format. The form captures various inspection details and allows for image uploads to include in the report. The PDF generation is handled using the `jsPDF` library.

## Features

- Dynamic form generation
- Capture inspection details including date, inspector's name, factory, inspection type, customer, and more
- Image upload functionality for different sections of the report
- Generate a formatted PDF report based on the captured data
- Preview images before adding them to the report

## Technologies Used

- HTML
- CSS
- JavaScript
- [jsPDF](https://github.com/parallax/jsPDF) library for PDF generation

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection to download the jsPDF library

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/inspection-report-form.git
    ```

2. Navigate to the project directory:
    ```bash
    cd inspection-report-form
    ```

3. Open the `index.html` file in your web browser to view and interact with the form.

### Usage

1. Open the form by clicking the "Create Form" button.
2. Fill out the required inspection details.
3. Upload images for specific sections if necessary.
4. Click the "Generate PDF" button to create and download the inspection report.

### Code Overview

- `index.html`: The main HTML file containing the structure of the form and the script to handle form generation and PDF creation.
- `style.css`: (Optional) Add your CSS styles to style the form.
- `script.js`: Contains JavaScript functions to dynamically generate the form, handle image uploads, and generate the PDF report.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [jsPDF](https://github.com/parallax/jsPDF) for providing the library to generate PDFs.

## Contact

For any inquiries or issues, please open an issue on the GitHub repository or contact [your-email@example.com].

