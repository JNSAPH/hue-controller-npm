export default class HueController {
    config: {
        ip: string | String;
        key: string | String;
    };
    constructor(config: {
        ip: string | String;
        key: string | String;
    });
    /**
     * getLights
     *
     * @return {Promise} Returns Array of all Lights
     * @memberof HueController
     */
    getLights(): Promise<unknown>;
    /**
     * getGroups
     *
     * @return {Promise} Returns Array of all Groups
     * @memberof HueController
     */
    getGroups(): Promise<unknown>;
    /**
     * getSensors
     *
     * @return {Promise} Returns Array of all Sensors
     * @memberof HueController
     */
    getSensors(): Promise<unknown>;
    /**
     * Change state of a single lamp
     *
     * @param {number} lamp
     * @param {boolean} state
     * @return {Promise}
     * @memberof HueController
     */
    changeState(lamp: number, state: boolean): Promise<unknown>;
    /**
     * changeBrightness
     *
     * @param {number} lamp
     * @param {number} brightness
     * @return {Promise}
     * @memberof HueController
     */
    changeBrightness(lamp: number, brightness: number): Promise<unknown>;
    /**
     * changecolor
     *
     * @param {number} lamp
     * @param {{ r: number, g: number, b: number }} color
     * @return {Promise}
     * @memberof HueController
     */
    changeColor(lamp: number, color: {
        r: number;
        g: number;
        b: number;
    }): Promise<unknown>;
}
//# sourceMappingURL=index.d.ts.map