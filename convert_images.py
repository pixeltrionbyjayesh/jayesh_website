from PIL import Image
import os

directory = r"c:\Users\harsh\Documents\Jayesh gosavi_main\src\assets\images"
extensions = ['.jpg', '.jpeg', '.png']

print(f"Checking directory: {directory}")

for filename in os.listdir(directory):
    if any(filename.lower().endswith(ext) for ext in extensions):
        filepath = os.path.join(directory, filename)
        webp_path = os.path.splitext(filepath)[0] + ".webp"
        
        try:
            with Image.open(filepath) as im:
                im.save(webp_path, "webp")
                print(f"Converted: {filename} -> {os.path.basename(webp_path)}")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")
