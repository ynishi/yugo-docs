# Getting Started with Yugo (AI-Web Fusion Platform)

Welcome to Yugo, your gateway to seamlessly integrating AI capabilities into your web services. This comprehensive guide will walk you through the initial steps to start using our platform, from registering your service to running your first AI feature.

## Prerequisites

Before you begin, ensure you have the following:
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- API documentation for your web service (OpenAPI/Swagger format recommended, or URL to your API documentation)
- Basic understanding of RESTful APIs

## Step 1: Access Yugo Alpha Demo

1. Visit [demo.yugo-ai.com](https://demo.yugo-ai.com)
2. Use the provided common demo ID to log in: `yugo-alpha-demo@yugo-ai.com`, password is same as ID.

## Step 2: Register Your Web Service

1. After logging in, click on "Services" in the left sidebar.
2. Click the "Create" button in the top right corner of the Services page.
3. On the "Create Service" page:
   - Enter a name for your service (e.g., "test web servie")
   - Provide a description of your service in the text editor
   - The Owner ID will be automatically filled
4. Click the "Save" button at the bottom right of the form.

## Step 3: Start a New Integration

1. On your service overview page, click the "Start New Integration" button.
2. A modal window will appear, titled "Start New Integration - Step 1 of 3".
3. Choose one of the following options:
   - "API Documentation Link": If your API documentation is available online.
   - "Paste API Documentation": If you have the documentation in text format.
4. If you selected "API Documentation Link", enter the URL in the provided field.
5. Click "Next" to proceed.

## Step 4: API Analysis

1. Yugo will automatically analyze your API documentation.
2. Wait for the analysis to complete. This usually takes a few moments.
3. Once finished, you'll see an "Analysis Complete" screen with a green checkmark.
4. Review the analysis results, which include details such as API name and other relevant information.

## Step 5: AI Feature Recommendations

1. Based on the API analysis, Yugo will present a list of recommended AI features.
2. Each recommended feature will have:
   - A checkbox for selection
   - The feature name
   - A brief description of the feature and its potential benefits
3. Review the recommendations and select the features you want to integrate.
4. Click "Start Integration with Selected Features" to proceed.

## Step 6: Integration Completion

1. Yugo will begin implementing the selected AI features.
2. Once the process is complete, you'll see a success message stating "Integration is complete".

## Step 7: Exploring Integrated Features

1. Navigate to the "Integrations" tab on your service dashboard to see a list of your current integrations.
2. Each integration will show its status (e.g., "integrated") and a brief summary of its functionality.
3. Switch to the "AI Features" tab to view available AI capabilities for your service.

## Step 8: Understanding AI Feature Details

1. Click on a specific AI feature to view more information.
2. You'll see:
   - Feature name and ID
   - A description of the feature's functionality
   - The opportunity it presents for your service
   - Technical details like the LLM Type and Model used

## Step 9: Running an AI Feature

### Using the GUI

1. On the AI Features tab, you'll see a list of integrated AI features. These features are enabled by default for your convenience.
2. To test an AI feature, click the "Run" button next to the feature you want to try.
3. In the pop-up window, you'll see the API endpoint and necessary headers.
4. Enter your test input in the provided field.
5. Click "Run" to process your input and see the results.

### Using the API Directly

You can also run AI features directly using API calls. Here's how:

1. **API Token for the Demo Service:**
   If you're using the pre-configured demo service, use the following token:
   ```
   yugo_demo_token_123456789
   ```
   This token is pre-generated for demonstration purposes.

2. **API Token for Your Own Services:**
   When you create a new service, you'll need to generate a unique API token for that service. Here's how:
   
   a. Navigate to the Service Console.
   b. Click Pencil Button left of Service name.
   c. Click "Create API Token" bottom of modal.
   d. Give your token a descriptive name (e.g., "ProductionAPI" or "TestEnvironment").
   e. Click "Create".
   f. Copy and securely store the generated token. Note: You won't be able to see this token again, so make sure to copy it immediately.

Each service requires its own unique token for API access and feature integration.

When using the API or integrating features, always use the token associated with the specific service you're working on.

3. To run an AI feature via API, use a curl command like this:

   ```bash
   curl -X POST "https://yugo-api-demo.shuttleapp.rs/features/{feature_id}/run" \
   -H "Authorization: Bearer yugo_demo_token_123456789" \
   -H "Content-Type: application/json" \
   -d '{
     "input_data": {
       "text": "Your input text here"
     }
   }'
   ```

   Replace `{feature_id}` with the ID of the AI feature you want to run, which you can find in the feature details on the GUI.

4. Example: If you're using a text classification feature with ID "text-classifier-001", your curl command might look like this:

   ```bash
   curl -X POST "https://yugo-api-demo.shuttleapp.rs/features/text-classifier-001/run" \
   -H "Authorization: Bearer yugo_demo_token_123456789" \
   -H "Content-Type: application/json" \
   -d '{
     "input_data": {
       "text": "This product is amazing and exceeded my expectations!"
     }
   }'
   ```

5. The API will return a JSON response with the results of the AI feature execution.

Note: If you want to disable any AI feature, you can do so by clicking on the feature and toggling the "Enabled" switch in the details view. You can re-enable features at any time.

Remember to keep your API tokens secure and never share them publicly. The demo token provided here is for illustration purposes only and has limited capabilities.

## Step 10: Viewing Run History

1. After running a feature, click the "History" button to access its history.
2. This will show you past inputs and outputs, allowing you to review and compare results over time.

## Next Steps

- Experiment with different AI features and inputs to optimize your web service integration.
- Join our [GitHub Discussions](https://github.com/ynishi/yugo-docs/discussions) to:
  - Connect with other developers and share your experiences
  - Get tips and tricks from the community
  - Participate in feature requests and provide feedback
  - Updated with our latest announcements in the [Announcements category](https://github.com/ynishi/yugo-docs/discussions/categories/announcements).
- Explore our [Planned Features](planned-features.md) to see what's coming next and how it might benefit your projects.
- Consider contributing to the community by sharing your own tips or helping others in the Q&A section.

Remember, Yugo is designed to help you easily integrate and test AI capabilities within your web service. Don't hesitate to experiment and explore the platform to maximize its benefits for your service.

## Getting Help

If you encounter any difficulties or have questions:
1. Check our [Support and FAQs](support-and-faqs.md) for quick answers, peer assistance
2. Contact our support team at support@yugo-ai.com for direct help

We're excited to see what you'll build with Yugo! Happy integrating!

## Tips for Success

To get the most out of Yugo, consider the following advice:

1. **API Documentation Quality**: Ensure your API documentation is as detailed and accurate as possible. This will help Yugo provide more relevant AI feature recommendations.

2. **Start Small**: Begin by integrating one or two AI features and thoroughly test them before adding more. This approach allows you to understand the impact of each feature on your service.

3. **Test Variations**: Experiment with different inputs when testing AI features to understand their capabilities and limitations.

4. **Monitor Usage**: Keep an eye on your AI feature usage through the dashboard. This will help you optimize your service and manage resources effectively.

5. **Stay Updated**: Regularly check for new AI features or updates to existing ones. Yugo is constantly evolving, and new capabilities may benefit your service.

6. **Provide Feedback**: Your input is valuable! If you have suggestions for improvement or encounter any issues, please let us know through the support channels.

7. **Security First**: Always follow security best practices, especially when handling sensitive data. Never share your API tokens publicly.

Remember, the Yugo team is here to support you. Don't hesitate to reach out if you have any questions or need assistance in optimizing your AI integrations.