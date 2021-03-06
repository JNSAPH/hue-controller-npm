export default class HueUtils {
    public rgbToXY(r: number, g: number, b: number) {
        const rFinal = this.enhanceColor(r / 255),
            gFinal = this.enhanceColor(g / 255),
            bFinal = this.enhanceColor(b / 255);

        const x = rFinal * 0.649926 + gFinal * 0.103455 + bFinal * 0.197109,
            y = rFinal * 0.234327 + gFinal * 0.743075 + bFinal * 0.022598,
            z = rFinal * 0.000000 + gFinal * 0.053077 + bFinal * 1.035763;

        const sum = x + y + z;

        if (sum == 0) {
            return { x: 0, y: 0 };
        }
        return `[${x / sum}, ${y / sum}]`
    }

    public brightness(r: number, g: number, b: number) {
        let hsp = Math.sqrt(
            0.299 * (r * r) +
            0.587 * (g * g) +
            0.114 * (b * b)
        )
        return Math.round(hsp);
    }

    private enhanceColor(normalized: number) {
        if (normalized > 0.04045) {
            return Math.pow((normalized + .055) / (1 + .055), 2.4);
        }

        return normalized / 12.92;
    }
}