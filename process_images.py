
import os
from PIL import Image
import numpy as np
import shutil

SOURCE_DIR = "/Users/linjingdi/Desktop/履歷網站/圖片"
DEST_DIR = "/Users/linjingdi/Desktop/履歷網站/public/images"

def auto_crop(image_path, output_path, padding=10):
    try:
        img = Image.open(image_path)
        img = img.convert("RGBA")
        
        # Get bounding box of non-transparent pixels
        # For PNG, use alpha channel. For others, maybe use color threshold?
        # Let's assume white background for cropping if no alpha
        
        # Method 1: GetBBox (works well for transparent)
        bbox = img.getbbox()
        
        if bbox:
            # Add padding
            left, upper, right, lower = bbox
            width, height = img.size
            left = max(0, left - padding)
            upper = max(0, upper - padding)
            right = min(width, right + padding)
            lower = min(height, lower + padding)
            
            img_cropped = img.crop((left, upper, right, lower))
            img_cropped.save(output_path)
            print(f"Cropped {image_path} and saved to {output_path}")
        else:
            # Verify if it's solid white/transparent?
            # If getbbox returns None, it's fully transparent (or empty)
            print(f"Warning: {image_path} seems empty or fully transparent.")
            # Fallback: Just copy
            img.save(output_path)

    except Exception as e:
        print(f"Error cropping {image_path}: {e}")

def check_mosaic(image_path):
    # Just basic check/print stats
    try:
        img = Image.open(image_path)
        print(f"Checking {image_path}: Format={img.format}, Size={img.size}, Mode={img.mode}")
    except Exception as e:
        print(f"Error checking {image_path}: {e}")

# 1. Update TIER (New file is jpg)
tier_src = os.path.join(SOURCE_DIR, "台灣經濟研究院.jpg")
tier_dst = os.path.join(DEST_DIR, "companies", "tier_new.jpg")
shutil.copy(tier_src, tier_dst)
print(f"Copied TIER to {tier_dst}")

# 2. Crop O-Bank
obank_src = os.path.join(SOURCE_DIR, "王道.png")
obank_dst = os.path.join(DEST_DIR, "companies", "o-bank-cropped.png")
auto_crop(obank_src, obank_dst)

# 3. Process Awards
ntcir_src = os.path.join(SOURCE_DIR, "NTCIR.png")
ntcir_dst = os.path.join(DEST_DIR, "awards", "ntcir.png")
if os.path.exists(ntcir_src):
    shutil.copy(ntcir_src, ntcir_dst)
    print("Copied NTCIR")

gtsm_src = os.path.join(SOURCE_DIR, "櫃買中心.png")
gtsm_dst = os.path.join(DEST_DIR, "awards", "gtsm.png")
if os.path.exists(gtsm_src):
    shutil.copy(gtsm_src, gtsm_dst)
    print("Copied GTSM")

# 4. Check NCCU
nccu_src = os.path.join(SOURCE_DIR, "政大.jpg")
check_mosaic(nccu_src)
# Copy it anyway for now to see
nccu_dst = os.path.join(DEST_DIR, "schools", "nccu_check.jpg")
shutil.copy(nccu_src, nccu_dst)
