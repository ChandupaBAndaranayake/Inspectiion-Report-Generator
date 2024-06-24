const formData = new FormData();
document.getElementById('create-form-btn').addEventListener('click', function() {
    this.remove();
    const formContainer = document.getElementById('form-container');
    const formHTML = `
        <form id="inspection-form">
            <h2> Pre/Final Inspection Report</h2>
            <div>
                <label for="inspection-date">Inspection Date:</label>
                <input type="date" id="inspection-date" name="inspection-date">
            </div>        

            <div>
                <label for="inspector-name">Inspector's Name:</label>
                <input type="text" id="inspector-name" name="inspector-name" placeholder="name">
            </div>
        
            <div>
                <label for="factory">Factory:</label>
                <input type="text" id="factory" name="factory" placeholder="Factory">
            </div>
        
            <div>
                <label for="inspection-type">Inspection Type:</label>
                <input type="text" id="inspection-type" name="inspection-type" placeholder="Final Inspection">
            </div>
        
            <div>
                <label for="customer">Customer:</label>
                <input type="text" id="customer" name="customer" placeholder="Customer">
            </div>
        
            <div>
                <label for="order-quantity">Order Quantity / Available Quantity:</label>
                <input type="text" id="order-quantity" name="order-quantity" placeholder="Quantity/Quantity">
            </div>
        
            <div>
                <label for="sample-quantity">Sample Quantity:</label>
                <input type="text" id="sample-quantity" name="sample-quantity" placeholder="Quantity">
            </div>
        
            <div>
                <label for="aql-standard">AQL Standard:</label>
                <select type="text" id="aql-standard" name="aql-standard">
                    <option value="">Please select</option>
                    <option value="AQL - 1.5/2.5">AQL - 1.5/2.5</option>
                    <option value="AQL - 1.0/1.5">AQL - 1.0/1.5</option>
                    <option value="AQL - 2.5/4.0">AQL - 2.5/4.0</option>
                    <!-- Add more options here as needed -->
                </select>
            </div>
        
        
            <div>
                <label for="po-number">PO Number:</label>
                <input type="text" id="po-number" name="po-number" placeholder="name">
            </div>
        
            <div>
                <label for="style-name">Style Name:</label>
                <input type="text" id="style-name" name="style-name" placeholder="Name">
            </div>
        
            <div>
                <label for="style-number">Style Number:</label>
                <input type="text" id="style-number" name="style-number" placeholder="Number">
            </div>
        
            <div>
                <label for="color">Color(s):</label>
                <input type="text" id="color" name="color" placeholder="Color(s)">
            </div>
        
            <div>
                <label for="inspection-conclusion">Overall Inspection Conclusion:</label>
                <input type="text" id="inspection-conclusion" name="inspection-conclusion" placeholder="Pass/Fail">
            </div>
        
            <h3>Product Conformity</h3>
        
            <div>
                <label for="order-file-available">Order File Available or Not:</label>
                <select id="order-file-available" name="order-file-available">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
                <div id="image-upload-container1"></div>
                <div id="image-preview-container1"></div>
            </div>
        
            <div>
                <label for="fabric-trims-card-available">Fabric & Trims Card Available or Not:</label>
                <select id="fabric-trims-card-available" name="fabric-trims-card-available">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
                <div id="image-upload-container2"></div>
                <div id="image-preview-container2"></div>
            </div>

            <div>
                <label for="sealed-sample-photo">Sealed Sample Photo:</label>
                <select id="sealed-sample-photo" name="sealed-sample-photo">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
                <div id="image-upload-container3"></div>
                <div id="image-preview-container3"></div>
            </div>

            <div>
                <label for="Bulk-Product(s)-Compared-with-Sealed-Sample">Bulk Product(s) Compared with Sealed Sample:</label>
                <select id="Bulk-Product(s)-Compared-with-Sealed-Sample" name="Bulk-Product(s)-Compared-with-Sealed-Sample">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
                <div id="image-upload-container4"></div>
                <div id="image-preview-container4"></div>
            </div>
        
            <div>
                <label for="main-label-care-label">Main Label & Care Label:</label>
                <select id="main-label-care-label" name="main-label-care-label">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <div>
                <label for="accessories">Accessories:</label>
                <select id="accessories" name="accessories">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <h3>Packing Conformity</h3>
        
            <div>
                <label for="shipping-mark-barcode">Shipping Mark/ Barcode:</label>
                <select id="shipping-mark-barcode" name="shipping-mark-barcode">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <div>
                <label for="carton-box-size-quality">Carton Box Size and Quality:</label>
                <select id="carton-box-size-quality" name="carton-box-size-quality">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <div>
                <label for="polybag-size-printing">Polybag Size/Printing:</label>
                <select id="polybag-size-printing" name="polybag-size-printing">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <div>
                <label for="folding-method">Folding Method:</label>
                <select id="folding-method" name="folding-method">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <div>
                <label for="tags">Tags:</label>
                <select id="tags" name="tags">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <div>
                <label for="assortment">Assortment:</label>
                <select id="assortment" name="assortment">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <div>
                <label for="moisture">Moisture:</label>
                <select id="moisture" name="moisture">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <div>
                <label for="smell">Smell:</label>
                <select id="smell" name="smell">
                    <option value="">Please select</option>
                    <option value="Yes">yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        
            <h3>Inspection Criteria Sheet</h3>
        
            <div>
                <label for="general-appearance">General Appearance:</label>
                <select id="general-appearance" name="general-appearance">
                    <option value="">Please select</option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                </select>
            </div>
        
            <div>
                <label for="functionality">Functionality:</label>
                <select id="functionality" name="functionality">
                    <option value="">Please select</option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                </select>
            </div>
        
            <div>
                <label for="workmanship">Workmanship:</label>
                <select id="workmanship" name="workmanship">
                    <option value="">Please select</option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                </select>
                <div id="image-upload-container5"></div>
                <div id="image-preview-container5"></div>
            </div>
        
            <div>
                <label for="measurement">Measurement:</label>
                <select id="measurement" name="measurement">
                    <option value="">Please select</option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                </select>
                <div id="image-upload-container6"></div>
                <div id="image-preview-container6"></div>
            </div>
        
            <div>
                <label for="pressing-ironing">Pressing/Ironing:</label>
                <select id="pressing-ironing" name="pressing-ironing">
                    <option value="">Please select</option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                </select>
            </div>
        
            <div>
                <label for="embellishments">Embellishments:</label>
                <select id="embellishments" name="embellishments">
                    <option value="">Please select</option>
                    <option value="Accept">Accept</option>
                    <option value="Reject">Reject</option>
                </select>
            </div>
        
            <h3>Signatures</h3>

            <div>
                <label for="final-comments-observations">Final Comments/Observations:</label>
                <textarea id="final-comments-observations" name="final-comments-observations" placeholder="Description"></textarea>
            </div>

            <div>
                <label for="inspector-signature">Inspector Signature:</label>
                <input type="file" id="inspector" name="filename" placeholder="name">
                <div id="image-preview-container-inspector"></div>
            </div>
        
            <div>
                <label for="reviewer-signature">Reviewer Name & Signature:</label>
                <input type="text" id="Reviewer-name" name="Reviewer-name" placeholder="name">
                <input type="file" id="Reviewer" name="filename">
                <div id="image-preview-container-Reviewer"></div>
            </div>
            <button type="submit" id="generate-pdf" class="modern-button">Generate PDF</button>
        </form>
    `;

    formContainer.innerHTML = formHTML;

    document.getElementById('order-file-available').addEventListener('change', function() {
        handleImageUpload('1', this.value);
    });
   
    document.getElementById('fabric-trims-card-available').addEventListener('change', function() {
        handleImageUpload('2', this.value);
    });

    document.getElementById('sealed-sample-photo').addEventListener('change', function() {
        handleImageUpload('3', this.value);
    });

    document.getElementById('Bulk-Product(s)-Compared-with-Sealed-Sample').addEventListener('change', function() {
        handleImageUpload('4', this.value);
    });

    document.getElementById('workmanship').addEventListener('change', function() {
        handleImageUpload('5', this.value);
    });
   
    document.getElementById('measurement').addEventListener('change', function() {
        handleImageUpload('6', this.value);
    });

    document.getElementById('inspector').addEventListener('change', function() {
        handleImagePreview('inspector');
    });
    
    document.getElementById('Reviewer').addEventListener('change', function() {
        handleImagePreview('Reviewer');
    });

    const form = document.getElementById('inspection-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        formData.append('inspectionDate', document.getElementById('inspection-date').value);
        formData.append('inspectorName', document.getElementById('inspector-name').value);
        formData.append('factory', document.getElementById('factory').value);
        formData.append('inspectionType', document.getElementById('inspection-type').value);
        formData.append('customer', document.getElementById('customer').value);
        formData.append('orderQuantity', document.getElementById('order-quantity').value);
        formData.append('sampleQuantity', document.getElementById('sample-quantity').value);
        formData.append('aqlStandard', document.getElementById('aql-standard').value);
        formData.append('poNumber', document.getElementById('po-number').value);
        formData.append('styleName', document.getElementById('style-name').value);
        formData.append('styleNumber', document.getElementById('style-number').value);
        formData.append('color', document.getElementById('color').value);
        formData.append('inspectionConclusion', document.getElementById('inspection-conclusion').value);
        formData.append('orderFileAvailable', document.getElementById('order-file-available').value);
        formData.append('fabricTrimsCardAvailable', document.getElementById('fabric-trims-card-available').value);
        formData.append('sealedSamplePhoto', document.getElementById('sealed-sample-photo').value);
        formData.append('bulkProductsComparedWithSealedSample', document.getElementById('Bulk-Product(s)-Compared-with-Sealed-Sample').value);
        formData.append('mainLabelCareLabel', document.getElementById('main-label-care-label').value);
        formData.append('accessories', document.getElementById('accessories').value);
        formData.append('shippingMarkBarcode', document.getElementById('shipping-mark-barcode').value);
        formData.append('cartonBoxSizeQuality', document.getElementById('carton-box-size-quality').value);
        formData.append('polybagSizePrinting', document.getElementById('polybag-size-printing').value);
        formData.append('foldingMethod', document.getElementById('folding-method').value);
        formData.append('tags', document.getElementById('tags').value);
        formData.append('assortment', document.getElementById('assortment').value);
        formData.append('moisture', document.getElementById('moisture').value);
        formData.append('smell', document.getElementById('smell').value);
        formData.append('generalAppearance', document.getElementById('general-appearance').value);
        formData.append('functionality', document.getElementById('functionality').value);
        formData.append('workmanship', document.getElementById('workmanship').value);
        formData.append('measurement', document.getElementById('measurement').value);
        formData.append('pressingIroning', document.getElementById('pressing-ironing').value);
        formData.append('embellishments', document.getElementById('embellishments').value);
        formData.append('reviewername', document.getElementById('Reviewer-name').value);
        formData.append('finalCommentsObservations', document.getElementById('final-comments-observations').value);
    
        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
        
        //generatePDF(formData);
    });
});

function handleImageUpload(containerNumber, value) {
    const imageUploadContainer = document.getElementById(`image-upload-container${containerNumber}`);
    const imagePreviewContainer = document.getElementById(`image-preview-container${containerNumber}`);
    imagePreviewContainer.innerHTML = '';

    if (value === 'Yes' || value === 'Accept') {
        // Show the upload container if it was previously hidden
        imageUploadContainer.style.display = 'block';

        // Create the label element for the image upload
        const label = document.createElement('label');
        label.setAttribute('for', `file-input-${containerNumber}`);
        label.textContent = `Upload Image ${containerNumber}:`;

        // Create the input element for the image with 'multiple' attribute
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('id', `file-input-${containerNumber}`);
        input.setAttribute('name', `file-input-${containerNumber}`);
        input.setAttribute('multiple', true);

        let x = 0;
        let photoCounter = 1;

        // Listen for changes to the file input and display image previews
        input.addEventListener('change', function(event) {
            const files = event.target.files;
            Array.from(files).forEach((file,index) => {
                formData.append(`${containerNumber}.${x}`, file, `image-preview-container${containerNumber}.${x}`);
                x++;
                const reader = new FileReader();
                reader.onload = function(e) {
                    const imageContainer = document.createElement('div');
                    imageContainer.style.display = 'inline-block';
                    const imageElement = document.createElement('img');
                    imageElement.src = e.target.result;
                    imageElement.style.width = '100px';
                    imageElement.style.height = 'auto';
                    imageElement.style.margin = '10px';
                    imageElement.alt = `Photo ${photoCounter}`;
                    const imageName = document.createElement('p');
                    imageName.textContent = `Photo ${photoCounter}`;
                    photoCounter++;
                    imageContainer.appendChild(imageElement);
                    imageContainer.appendChild(imageName);
                    imagePreviewContainer.appendChild(imageContainer);
                };
                reader.readAsDataURL(file);
            });
            // Show the preview container
            imagePreviewContainer.style.display = 'block';
        });

        // Append the label and input to the upload container
        imageUploadContainer.appendChild(label);
        imageUploadContainer.appendChild(input);
    } else {
        // Hide the upload container and clear its content
        imageUploadContainer.style.display = 'none';
        imageUploadContainer.innerHTML = '';
        // Hide the preview container
        imagePreviewContainer.style.display = 'none';
    }
}

function handleImagePreview(fieldId) {
    const fileInput = document.getElementById(fieldId);
    const imagePreviewContainer = document.getElementById(`image-preview-container-${fieldId}`);

    // Clear out any existing content
    imagePreviewContainer.innerHTML = '';
    if (fileInput.files.length > 0) {
        const files = fileInput.files;
        let photoCounter = 1;

        Array.from(files).forEach((file,index) => {
            formData.append(`${fieldId}`, file, `image-preview-container-${fieldId}`);
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageContainer = document.createElement('div');
                imageContainer.style.display = 'inline-block';
                const imageElement = document.createElement('img');
                imageElement.src = e.target.result;
                imageElement.style.width = '100px';
                imageElement.style.height = 'auto';
                imageElement.style.margin = '10px';
                imageElement.alt = `Photo ${photoCounter}`;
                const imageName = document.createElement('p');
                imageName.textContent = `Photo ${photoCounter}`;
                photoCounter++;
                imageContainer.appendChild(imageElement);
                imageContainer.appendChild(imageName);
                imagePreviewContainer.appendChild(imageContainer);
            };
            reader.readAsDataURL(file);
        });

        // Show the preview container
        imagePreviewContainer.style.display = 'block';
    } else {
        // Hide the preview container
        imagePreviewContainer.style.display = 'none';
    }
}

function generatePDF(formData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    // Add the form data to the PDF
    doc.setFontSize(1);
    doc.text(`Inspector's Name: ${formData.inspectorName}`, 20, 20);
    doc.text(`Inspection Date: ${formData.inspectionDate}`, 20, 30);
    doc.text(`Factory: ${formData.factory}`, 20, 40);
    doc.text(`Inspection Type: ${formData.inspectionType}`, 20, 50);
    doc.text(`Customer: ${formData.customer}`, 20, 60);
    doc.text(`Order Quantity / Available Quantity: ${formData.orderQuantity}`, 20, 70);
    doc.text(`Sample Quantity: ${formData.sampleQuantity}`, 20, 80);
    doc.text(`AQL Standard: ${formData.aqlStandard}`, 20, 90);
    doc.text(`PO Number: ${formData.poNumber}`, 20, 100);
    doc.text(`Style Name: ${formData.styleName}`, 20, 110);
    doc.text(`Style Number: ${formData.styleNumber}`, 20, 120);
    doc.text(`Color(s): ${formData.color}`, 20, 130);
    doc.text(`Overall Inspection Conclusion: ${formData.inspectionConclusion}`, 20, 140);
    // Add the product conformity section
    doc.setFontSize(14);
    doc.text('Product Conformity', 20, 160);
    doc.setFontSize(12);
    doc.text(`Order File Available or Not: ${formData.orderFileAvailable}`, 20, 170);
    doc.text(`Fabric & Trims Card Available or Not: ${formData.fabricTrimsCardAvailable}`, 20, 180);
    doc.text(`Main Label & Care Label: ${formData.mainLabelCareLabel}`, 20, 190);
    doc.text(`Accessories: ${formData.accessories}`, 20, 200);
    // Add the packing conformity section
    doc.setFontSize(14);
    doc.text('Packing Conformity', 20, 220);
    doc.setFontSize(12);
    doc.text(`Shipping Mark/ Barcode: ${formData.shippingMarkBarcode}`, 20, 230);
    doc.text(`Carton Box Size and Quality: ${formData.cartonBoxSizeQuality}`, 20, 240);
    doc.text(`Polybag Size/Printing: ${formData.polybagSizePrinting}`, 20, 250);
    doc.text(`Folding Method: ${formData.foldingMethod}`, 20, 260);
    doc.text(`Tags: ${formData.tags}`, 20, 270);
    doc.text(`Assortment: ${formData.assortment}`, 20, 280);
    doc.text(`Moisture: ${formData.moisture}`, 20, 290);
    doc.text(`Smell: ${formData.smell}`, 20, 300);
    // Add the inspection criteria sheet section
    doc.setFontSize(14);
    doc.text('Inspection Criteria Sheet', 20, 320);
    doc.setFontSize(12);
    doc.text(`General Appearance: ${formData.generalAppearance}`, 20, 330);
    doc.text(`Functionality: ${formData.functionality}`, 20, 340);
    doc.text(`Workmanship: ${formData.workmanship}`, 20, 350);
    doc.text(`Measurement: ${formData.measurement}`, 20, 360);
    doc.text(`Pressing/Ironing: ${formData.pressingIroning}`, 20, 370);
    doc.text(`Embellishments: ${formData.embellishments}`, 20, 380);
    // Add the signatures section
    doc.setFontSize(14);
    doc.text('Signatures', 20, 400);
    doc.setFontSize(12);
    // Assuming formData.inspectorSignature is a Data URI of the image
    const signatureImage = formData.inspectorSignature; // This should be a Data URI
    // You would add the image to the PDF like this:
    if (signatureImage) {
        // Coordinates (x, y), width and height can be adjusted
        doc.addImage(signatureImage, 'JPEG', 20, 420, 50, 30);
    }
    doc.text(`Reviewer Signature: ${formData.reviewerSignature}`, 20, 420);
    doc.text(`Final Comments/Observations: ${formData.finalCommentsObservations}`, 20, 430);
    // Save the PDF
    doc.save('inspection-report.pdf');
}
