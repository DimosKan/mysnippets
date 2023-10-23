import os
import shutil

# Define the source directory containing folders with .tar files
source_directory = '/home/dimos/Desktop/db/databases'

# Define the destination directory
destination_directory = os.path.expanduser('~/dbout')

# Ensure the destination directory exists
os.makedirs(destination_directory, exist_ok=True)

# Loop through each folder in the source directory
for folder_name in os.listdir(source_directory):
    folder_path = os.path.join(source_directory, folder_name)

    # Check if the item is a directory
    if os.path.isdir(folder_path):
        # Look for .tar files inside the folder
        for item in os.listdir(folder_path):
            if item.endswith('.tar'):
                tar_file = os.path.join(folder_path, item)

                # Decompress the .tar file using the tar command
                # Change 'xvf' to 'xzvf' if it's a .tar.xz file
                os.system(f'tar xvf {tar_file} -C {destination_directory}')

                # Rename the extracted file to match the folder name
                extracted_file = os.path.join(destination_directory, item[:-4])  # Remove .tar extension
                new_name = os.path.join(destination_directory, folder_name)
                os.rename(extracted_file, new_name)

print("Extraction and copy complete.")

