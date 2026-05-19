$src = Join-Path $PSScriptRoot '..\src' | Resolve-Path
$out = Join-Path $src 'hero-images.json'
$imageExt = @('.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg')

$files = Get-ChildItem -Path $src -File |
  Where-Object { $imageExt -contains $_.Extension.ToLower() } |
  Sort-Object { [int]($_.BaseName -replace '\D+', '') }, Name |
  ForEach-Object { $_.Name }

$json = ($files | ConvertTo-Json -Compress)
if ($files.Count -gt 1) {
  $json = "[`n  `" + ($files -join "`,\n  `"") + "`"\n]"
} elseif ($files.Count -eq 1) {
  $json = "[`n  `"$($files[0])`"\n]"
} else {
  $json = "[]"
}

Set-Content -Path $out -Value $json -Encoding UTF8
Write-Host "Updated $out with $($files.Count) image(s):"
$files | ForEach-Object { Write-Host "  $_" }
