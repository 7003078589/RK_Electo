<?php
// Simple file copy script for RK Electro Hub deployment
echo "Starting RK Electro Hub deployment...\n";

// Copy main files
$mainFiles = ['index.html', 'favicon.ico', 'robots.txt', 'placeholder.svg', 'havells.svg', 'finolex.svg', 'gm.svg', 'legrand.svg', 'anchor.svg', 'polycab.svg'];
foreach ($mainFiles as $file) {
    if (file_exists("dist/$file")) {
        if (copy("dist/$file", $file)) {
            echo "Copied: $file\n";
        } else {
            echo "Failed to copy: $file\n";
        }
    }
}

// Copy assets folder
if (is_dir('dist/assets')) {
    if (!is_dir('assets')) {
        mkdir('assets', 0755, true);
    }
    
    $assetFiles = glob('dist/assets/*');
    foreach ($assetFiles as $file) {
        $filename = basename($file);
        if (copy($file, "assets/$filename")) {
            echo "Copied asset: $filename\n";
        } else {
            echo "Failed to copy asset: $filename\n";
        }
    }
}

// Copy lovable-uploads folder
if (is_dir('dist/lovable-uploads')) {
    if (!is_dir('lovable-uploads')) {
        mkdir('lovable-uploads', 0755, true);
    }
    
    $uploadFiles = glob('dist/lovable-uploads/*');
    foreach ($uploadFiles as $file) {
        $filename = basename($file);
        if (copy($file, "lovable-uploads/$filename")) {
            echo "Copied upload: $filename\n";
        } else {
            echo "Failed to copy upload: $filename\n";
        }
    }
}

echo "Deployment completed!\n";
exit(0);
?>
