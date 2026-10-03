---
type: concept
domain: cosmology-space
tags:
  - "photometry"
  - "human-vision"
  - "luminosity-function"
  - "radiometry-difference"
  - "stellar-magnitudes"
  - "cie-1931-standard"
  - "light-measurement"
aliases:
  - "Visual Light Measurement"
  - "Perceived Brightness Science"
  - "Luminous Quantity Measurement"
summary: Photometry is the science of measuring visible light based on its perceived brightness to the human eye, distinguishing it from radiometry by weighting electromagnetic radiation according to the luminosity function.
updated: 2026-07-12
group: cosmology-astronomy-astrophysics
generated: { by: "process:nemoclaw-wiki-ingest", at: "2026-07-12" }
---
<!-- domain-nav -->
> domain-badge slug=cosmology-space name=Cosmology & Space

# Photometry

**Photometry** is the [[concepts/science|science]] of measuring visible light in terms of its perceived brightness to the human eye. Unlike **Radiometry**, which measures absolute [[concepts/light|electromagnetic radiation]] energy, photometry [[concepts/weights|weights]] radiation according to the Luminosity Function, which models the spectral sensitivity of the human visual system.

## Core Principles

- **Standard Observer**: Measurements are based on the CIE 1931 standard observer colorimetry, representing average human cone response.
- **Luminous Quantity**: Any photometric quantity is derived from a radiometric equivalent multiplied by the luminosity function and a [[concepts/computational-scaling|scaling]] constant ($K_{cd}$).
- **Units**:
    - **Luminous Flux**: Measured in **Candela** (cd) or **Lumen** (lm).
    - **Illuminance**: Measured in **Lux** (lx).
    - **Luminance**: Measured in **cd/m²**.

## Key Equations

$$ \Phi_v = K_{cd} \int_{360\text{nm}}^{830\text{nm}} \Phi_{e,\lambda}(\lambda) \cdot V(\lambda) \, d\lambda $$

Where:
- $\Phi_v$ is luminous flux.
- $\Phi_{e,\lambda}$ is spectral irradiance.
- $V(\lambda)$ is the luminosity function.
- $K_{cd} \approx 683 \, \text{lm/W}$ at 555 nm (peak sensitivity).

## Applications

- **[[concepts/astronomy|Astronomy]]**: Determining stellar magnitudes and brightness. Recent debates highlight the [[concepts/value|importance]] of precise photometric classification to avoid misidentification of redshift and object nature. For instance, see [[lab-notes/2026-05-25-JWSTs-Most-Distant-Galaxy-Mystery-Revealed-as-Milky-Way|JWST's "Most Distant Galaxy" Mystery: Revealed as Milky Way Objects]] for a case where photometric analysis helped correct initial misclassifications of high-redshift candidates as local [[concepts/milky-way|Milky Way]] objects.
- **Lighting [[entities/national-academies|Engineering]]**: Designing efficient illumination systems.
- **Color [[concepts/science|Science]]**: Basis for [[concepts/color-spaces|color spaces]] like CIE XYZ.

## See Also

- Radiometry
- Spectrophotometry
- Visual Spectrum
