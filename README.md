# Elite Transporters

Current design combines red/white/black angular branding, a scenic road hero with an oversized Noah, and a three-car gallery. The gallery buttons and accessible vehicle tabs populate the WhatsApp quote form. Vercel serves the `dist` directory.

## Campaign assets

The built-in image-generation tool created `dist/assets/uganda-road.png`, `dist/assets/wish.png`, and `dist/assets/vanguard.png`. The landscape is illustrative; Wish and Vanguard cutouts were derived from the supplied company poster. The original company logo remains unchanged.

Road prompt: Create a photorealistic panoramic automotive advertising background, landscape 1536x1024 or wider. An empty smooth dark asphalt road curving through lush green rolling hills inspired by southwestern Uganda, distant blue layered mountains, scattered tropical trees and banana plants, rich warm sunrise from upper right, blue sky with soft luminous clouds. Camera very low near road surface, road foreground occupies bottom half and extends broadly across frame, vanishing towards center-right. Beautiful premium travel campaign photography, natural crisp vivid greens, warm light, sophisticated high contrast. No vehicles, no people, no buildings, no words or logos, no border. Leave plenty of empty foreground asphalt for compositing a large white minivan later. This is scenic illustrative campaign art not a specific named location.

Wish prompt: Background extraction for an automotive fleet website. Edit target: attached Elite Transporters poster. Isolate ONLY the CENTER white Toyota Wish 2007. Preserve the actual car's shape, three-quarter front view, white paint, tinted windows, wheels and black/red Elite Transporters door logo. Clean photorealistic studio-quality transparent-background cutout, entire vehicle visible tightly framed with small margins. Remove the left Noah, right Vanguard, every poster caption, scenery, phone screen and all other elements. Do not redesign the car or branding. Soft contact shadow only.

Vanguard prompt: Background extraction for an automotive fleet website. Edit target: attached Elite Transporters poster. Isolate ONLY the RIGHT white Toyota Vanguard 2017 SUV. Preserve the actual car's shape, three-quarter front view, white paint, tinted windows, wheels and black/red Elite Transporters door logo. Clean photorealistic studio-quality transparent-background cutout, entire vehicle visible tightly framed with small margins. Remove the left Noah, center Wish, every poster caption, scenery, phone screen and all other elements. Do not redesign the car or branding. Soft contact shadow only.

Buildless responsive website. Serve `dist` with any static web server (for example `python -m http.server 4173 --directory dist`).

Company content transcribed from the supplied posters and TikTok screenshot. Contact links use +256781293004, +256748221629, and https://www.tiktok.com/@elite.transporter8. No unprovided email, social profiles, prices, reviews, or customer statistics were invented. Border locations are listed without the inconsistent country groupings in the supplied poster. Vehicle availability and quotes require confirmation from Elite.

The booking form opens a prepared WhatsApp message; it does not send it or confirm a reservation. No backend or customer data storage is used. Fonts load from Google Fonts with local fallbacks.

## Hero asset

Saved asset: `dist/assets/noah.png`. Created using the built-in image-generation tool in background-extraction mode from the supplied Noah/Wish poster.

Final prompt: Use case: background-extraction. Edit target: attached Elite Transporters poster. Extract ONLY the white Toyota Noah 2012 minivan on the LEFT as a clean high resolution transparent PNG cutout for a website hero. Preserve its exact front three-quarter orientation, white paint, tinted windows, wheels, chrome grille and Elite Transporters door branding. Entire vehicle visible, tight framing with small margin, subtle natural contact shadow. Remove the Wish car on the right, all background, poster text, borders and smartphone UI. Faithful vehicle isolation; do not invent extra objects.

## Original company logo
The header, footer, and favicon use the original red-and-black logo from the user-supplied Noah/Wish poster. assets/elite-logo.svg and assets/elite-icon.svg are SVG viewports over the embedded original JPEG pixels, with no AI redrawing or replacement lettering. The source screenshot limits the native logo resolution.

