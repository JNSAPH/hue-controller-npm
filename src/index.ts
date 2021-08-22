import { futimes } from 'fs';
import * as https from 'http';
import HueUtils from './hueUtils';

const hueUtils = new HueUtils();


export class HueController {
    config: { ip: string | String; key: string | String; };

    constructor(config: {
        ip: string | String,
        key: string | String
    }) {
        this.config = config;
    }

    /**
     * getLights
     * 
     * @return {Promise} Returns Array of all Lights 
     * @memberof HueController
     */
    public async getLights() {
        return new Promise((resolve, reject) => {
            const res = https.get(`http://${this.config.ip}/api/${this.config.key}/lights`, (res) => {
                console.log(`http://${this.config.ip}/api/${this.config.key}/lights`);

                res.setEncoding('utf8');
                let responseBody = '';

                res.on('data', (chunk) => {
                    responseBody += chunk;
                });

                res.on('end', () => {
                    resolve(JSON.parse(responseBody));
                });
            });

            res.on('error', (err) => {
                reject(err);
            });

            res.end();
        });
    }

    /**
     * getGroups
     * 
     * @return {Promise} Returns Array of all Groups 
     * @memberof HueController
     */
    public async getGroups() {
        return new Promise((resolve, reject) => {
            const res = https.get(`http://${this.config.ip}/api/${this.config.key}/groups`, (res) => {
                res.setEncoding('utf8');
                let responseBody = '';

                res.on('data', (chunk) => {
                    responseBody += chunk;
                });

                res.on('end', () => {
                    resolve(JSON.parse(responseBody));
                });
            });

            res.on('error', (err) => {
                reject(err);
            });

            res.end();
        });
    }

    /**
     * getSensors
     * 
     * @return {Promise} Returns Array of all Sensors 
     * @memberof HueController
     */
    public async getSensors() {
        return new Promise((resolve, reject) => {
            const res = https.get(`http://${this.config.ip}/api/${this.config.key}/sensors`, (res) => {
                res.setEncoding('utf8');
                let responseBody = '';

                res.on('data', (chunk) => {
                    responseBody += chunk;
                });

                res.on('end', () => {
                    resolve(JSON.parse(responseBody));
                });
            });

            res.on('error', (err) => {
                reject(err);
            });

            res.end();
        });
    }

    /**
     * Change state of a single lamp
     *
     * @param {number} lamp 
     * @param {boolean} state
     * @return {Promise} 
     * @memberof HueController
     */
    public async changeState(lamp: number, state: boolean) {
        const data = new TextEncoder().encode(
            JSON.stringify({
                on: state
            })
        )

        const options = {
            hostname: `${this.config.ip}`,
            path: `/api/${this.config.key}/lights/${lamp}/state`,
            method: 'put',
        }

        return new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                let responseBody = '';

                res.on('data', (chunk) => {
                    responseBody += chunk;
                });
            });

            req.on('error', (err) => {
                reject(err);
            });

            req.write(data);

            req.end();
        });
    }

    /**
     * changeBrightness
     *
     * @param {number} lamp
     * @param {number} brightness
     * @return {Promise} 
     * @memberof HueController
     */
    public async changeBrightness(lamp: number, brightness: number) {
        if (brightness < 0 || brightness > 255) throw new RangeError("Value must be between 0 and 255");

        const data = new TextEncoder().encode(
            JSON.stringify({
                bri: brightness
            })
        )

        const options = {
            hostname: `${this.config.ip}`,
            path: `/api/${this.config.key}/lights/${lamp}/state`,
            method: 'put',
        }

        return new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                let responseBody = '';

                res.on('data', (chunk) => {
                    responseBody += chunk;
                });
            });

            req.on('error', (err) => {
                reject(err);
            });

            req.write(data);

            req.end();
        });
    }

    /**
     * changecolor
     *
     * @param {number} lamp
     * @param {{ r: number, g: number, b: number }} color
     * @return {Promise}  
     * @memberof HueController
     */
    public async changeColor(lamp: number, color: { r: number, g: number, b: number }) {
        if (color.r < 0 || color.r > 255) throw new RangeError("Invalid color.r");
        if (color.g < 0 || color.g > 255) throw new RangeError("Invalid color.g");
        if (color.b < 0 || color.b > 255) throw new RangeError("Invalid color.b");

        const data = new TextEncoder().encode(
            JSON.stringify({
                xy: JSON.parse(<string>hueUtils.rgbToXY(color.r, color.g, color.b)),
                bri: hueUtils.brightness(color.r, color.g, color.b)
            })
        )

        const options = {
            hostname: `${this.config.ip}`,
            path: `/api/${this.config.key}/lights/${lamp}/state`,
            method: 'put',
        }

        return new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                res.setEncoding('utf8');
                let responseBody = '';

                res.on('data', (chunk) => {
                    responseBody += chunk;
                });
            });

            req.on('error', (err) => {
                reject(err);
            });

            req.write(data);

            req.end();
        });
    }
}