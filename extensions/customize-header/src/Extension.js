import {Image} from '@shopify/ui-extensions/checkout';

export default function renderExtension({root}) {
  // Create the header's image using an Image component.
  // Replace the source with your own image url. Learn more:
  // https://help.shopify.com/en/manual/shopify-admin/productivity-tools/file-uploads
  const image = root.createComponent(Image, {
    source: 'https://cdn.shopify.com/s/files/1/0681/4652/8471/files/Black_Minimal_Motivation_Quote_LinkedIn_Banner_2_1.png',
  })

  root.appendChild(image);
}