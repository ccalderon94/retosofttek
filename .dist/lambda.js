/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
const aws_serverless_express_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const core_1 = __webpack_require__(4);
const platform_express_1 = __webpack_require__(36);
const express_1 = __importDefault(__webpack_require__(37));
const expressApp = (0, express_1.default)();
const createNestServer = async (expressInstance) => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(expressInstance));
    await app.init();
};
createNestServer(expressApp);
const server = (0, aws_serverless_express_1.createServer)(expressApp);
const handler = (event, context, callback) => {
    (0, aws_serverless_express_1.proxy)(server, event, context, 'CALLBACK', (error, result) => {
        if (error) {
            callback(error);
        }
        else {
            callback(null, result);
        }
    });
};
exports.handler = handler;


/***/ }),
/* 1 */
/***/ ((module) => {

module.exports = require("aws-serverless-express");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(3);
const core_1 = __webpack_require__(4);
const config_1 = __webpack_require__(5);
const archetype_1 = __webpack_require__(6);
const dynamoose_1 = __webpack_require__(7);
const response_parser_1 = __webpack_require__(8);
const http_client_1 = __webpack_require__(9);
const utils_module_1 = __webpack_require__(10);
const app_controller_1 = __webpack_require__(12);
const app_service_1 = __webpack_require__(14);
const config_2 = __webpack_require__(15);
const starwars_module_1 = __webpack_require__(22);
const personas_module_1 = __webpack_require__(27);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: (0, config_2.getEnvFilePath)(),
                ignoreEnvFile: process.env.NODE_ENV === 'production' || false,
                load: [config_2.config],
                isGlobal: true,
                validationSchema: config_2.validationSchema,
            }),
            archetype_1.ArchetypeModule,
            http_client_1.HttpClientModule,
            utils_module_1.UtilsModule,
            starwars_module_1.StarwarsModule,
            personas_module_1.PersonasModule,
            dynamoose_1.DynamooseModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: response_parser_1.ResponseInterceptor,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: http_client_1.HttpClientInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@tresdoce-nestjs-toolkit/archetype");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@tresdoce-nestjs-toolkit/dynamoose");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@tresdoce-nestjs-toolkit/response-parser");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("@tresdoce-nestjs-toolkit/http-client");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UtilsModule = void 0;
const common_1 = __webpack_require__(3);
const utils_service_1 = __webpack_require__(11);
let UtilsModule = class UtilsModule {
};
UtilsModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [utils_service_1.UtilsService],
        exports: [utils_service_1.UtilsService],
    })
], UtilsModule);
exports.UtilsModule = UtilsModule;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UtilsService = void 0;
const common_1 = __webpack_require__(3);
let UtilsService = class UtilsService {
    mapAndTranslatePeople(dto) {
        return {
            nombre: dto.name,
            anio_nacimiento: dto.birth_year,
            color_ojos: dto.eye_color,
            genero: dto.gender,
            color_cabello: dto.hair_color,
            estatura: dto.height,
            peso: dto.mass,
            color_piel: dto.skin_color,
            planeta_origen: dto.homeworld,
            peliculas: dto.films,
            especies: dto.species,
            naves_estelares: dto.starships,
            vehiculos: dto.vehicles,
            url: dto.url,
            fecha_creacion: dto.created,
            fecha_modificacion: dto.edited,
        };
    }
    mapAndTranslateFilms(dto) {
        return {
            titulo: dto.title,
            id_episodio: dto.episode_id,
            texto_apertura: dto.opening_crawl,
            director: dto.director,
            productor: dto.producer,
            fecha_lanzamiento: dto.release_date,
            especies: dto.species,
            naves_estelares: dto.starships,
            vehiculos: dto.vehicles,
            personajes: dto.characters,
            planetas: dto.planets,
            url: dto.url,
            fecha_creacion: dto.created,
            fecha_modificacion: dto.edited,
        };
    }
    mapAndTranslatePlanets(dto) {
        return {
            nombre: dto.name,
            diametro: dto.diameter,
            periodo_rotacion: dto.rotation_period,
            periodo_orbital: dto.orbital_period,
            gravedad: dto.gravity,
            poblacion: dto.population,
            clima: dto.climate,
            terreno: dto.terrain,
            agua_superficial: dto.surface_water,
            residentes: dto.residents,
            peliculas: dto.films,
            url: dto.url,
            fecha_creacion: dto.created,
            fecha_modificacion: dto.edited,
        };
    }
    mapAndTranslateSpecies(dto) {
        return {
            nombre: dto.name,
            clasificacion: dto.classification,
            designacion: dto.designation,
            altura_promedio: dto.average_height,
            esperanza_vida_promedio: dto.average_lifespan,
            colores_ojos: dto.eye_colors,
            colores_cabello: dto.hair_colors,
            colores_piel: dto.skin_colors,
            idioma: dto.language,
            planeta_origen: dto.homeworld,
            personas: dto.people,
            peliculas: dto.films,
            url: dto.url,
            fecha_creacion: dto.created,
            fecha_modificacion: dto.edited,
        };
    }
    mapAndTranslateStarships(dto) {
        return {
            nombre: dto.name,
            modelo: dto.model,
            tipo_nave: dto.starship_class,
            fabricante: dto.manufacturer,
            costo_en_creditos: dto.cost_in_credits,
            longitud: dto.length,
            tripulacion: dto.crew,
            pasajeros: dto.passengers,
            velocidad_atmosferica_maxima: dto.max_atmosphering_speed,
            clasificacion_hiperimpulsor: dto.hyperdrive_rating,
            MGLT: dto.MGLT,
            capacidad_carga: dto.cargo_capacity,
            duracion_suministros: dto.consumables,
            peliculas: dto.films,
            pilotos: dto.pilots,
            url: dto.url,
            fecha_creacion: dto.created,
            fecha_modificacion: dto.edited,
        };
    }
    mapAndTranslateVehicles(dto) {
        return {
            nombre: dto.name,
            modelo: dto.model,
            tipo_vehiculo: dto.vehicle_class,
            fabricante: dto.manufacturer,
            longitud: dto.length,
            costo_en_creditos: dto.cost_in_credits,
            tripulacion: dto.crew,
            pasajeros: dto.passengers,
            velocidad_atmosferica_maxima: dto.max_atmosphering_speed,
            capacidad_carga: dto.cargo_capacity,
            duracion_suministros: dto.consumables,
            peliculas: dto.films,
            pilotos: dto.pilots,
            url: dto.url,
            fecha_creacion: dto.created,
            fecha_modificacion: dto.edited,
        };
    }
};
UtilsService = __decorate([
    (0, common_1.Injectable)()
], UtilsService);
exports.UtilsService = UtilsService;


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const openapi = __webpack_require__(13);
const common_1 = __webpack_require__(3);
const app_service_1 = __webpack_require__(14);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Get)('/'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(15);
let AppService = class AppService {
    constructor(appConfig) {
        this.appConfig = appConfig;
    }
    getHello() {
        return 'Hello World!';
    }
    getTestEnv() {
        return `${this.appConfig.params.testEnv}`;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.config.KEY)),
    __metadata("design:paramtypes", [void 0])
], AppService);
exports.AppService = AppService;


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
var configuration_1 = __webpack_require__(16);
Object.defineProperty(exports, "config", ({ enumerable: true, get: function () { return __importDefault(configuration_1).default; } }));
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(17);
const config_1 = __webpack_require__(5);
const PACKAGE_JSON = __importStar(__webpack_require__(18));
exports["default"] = (0, config_1.registerAs)('config', () => ({
    project: {
        apiPrefix: process.env.API_PREFIX || 'API-PREFIX',
        name: PACKAGE_JSON.name,
        version: PACKAGE_JSON.version,
        description: PACKAGE_JSON.description,
        author: PACKAGE_JSON.author,
        repository: PACKAGE_JSON.repository,
        bugs: PACKAGE_JSON.bugs,
        homepage: PACKAGE_JSON.homepage,
    },
    server: {
        isProd: process.env.NODE_ENV === 'production',
        appStage: process.env.APP_STAGE,
        port: parseInt(process.env.PORT, 10) || 8080,
        context: process.env.CONTEXT || 'v1',
        origins: process.env.ORIGINS ? process.env.ORIGINS.split(',') : '*',
        allowedHeaders: process.env.ALLOWED_HEADERS,
        allowedMethods: process.env.ALLOWED_METHODS,
        propagateHeaders: process.env.PROPAGATE_HEADERS
            ? process.env.PROPAGATE_HEADERS.split(',')
            : [],
        corsEnabled: process.env.CORS_ENABLED.toLowerCase() === 'true',
        corsCredentials: process.env.CORS_CREDENTIALS.toLowerCase() === 'true',
    },
    health: {
        skipChecks: (0, core_1.getSkipHealthChecks)(process.env.SKIP_HEALTH_CHECKS),
    },
    swagger: {
        path: process.env.SWAGGER_PATH || 'docs',
        enabled: process.env.SWAGGER_ENABLED.toLowerCase() === 'true',
    },
    params: {
        testEnv: process.env.TEST_KEY,
    },
    services: {
        starWarsAPI: {
            url: process.env.STAR_WARS_API_URL,
            timeout: 3000,
            healthPath: process.env.STAR_WARS_API_URL_LIVENNESS,
        },
    },
    dynamodb: {
        local: process.env.NODE_ENV !== 'production' || false,
        logger: process.env.NODE_ENV !== 'production' || false,
        aws: {
            accessKeyId: `${process.env.AWS_ACCESS_KEY_ID}`,
            secretAccessKey: `${process.env.AWS_SECRET_ACCESS_KEY}`,
            region: `${process.env.AWS_REGION}`,
        },
        table: {
            create: process.env.NODE_ENV !== 'production' || false,
            prefix: `${PACKAGE_JSON.name}-`,
            suffix: '-table',
        },
    },
}));


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("@tresdoce-nestjs-toolkit/core");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"reto-backend","version":"1.0.0","description":"Reto Backend con Dynamoo y Serverless","author":{"name":"Christian Carmelo Calderon Castro","email":"ccalderon9411@gmail.com","url":"https://www.linkedin.com/in/ccalderon9411"},"repository":{"type":"git","url":"git+https://github.com/ccalderon9411/reto-softtek.git"},"bugs":{"url":"https://github.com/ccalderon9411/reto-softtek/issues"},"homepage":"https://github.com/ccalderon9411/reto-softtek#readme","private":true,"license":"MIT","scripts":{"clean":"rimraf coverage dist node_modules junit.xml test-report.xml yarn.lock package-lock.json","prebuild":"rimraf dist","build":"cross-env NODE_ENV=build nest build","start":"cross-env NODE_ENV=production node dist/main","start:dev":"cross-env NODE_ENV=dev nest start --watch","start:debug":"cross-env NODE_ENV=dev nest start --debug --watch","format":"prettier --write \\"src/**/*.ts\\" \\"test/**/*.ts\\"","lint":"eslint \\"{src,apps,libs,test}/**/*.ts\\" webpack.config.js lambda.ts --fix","pre-commit":"lint-staged","test":"jest --runInBand --detectOpenHandles --forceExit --coverage","test:husky":"jest --runInBand --forceExit --coverage","test:watch":"jest --watch","test:cov":"jest --coverage","test:debug":"node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand","test:e2e":"jest --config ./test/jest-e2e.json","release":"standard-version","prepare":"husky"},"prettier":{"semi":true,"tabWidth":2,"singleQuote":true,"printWidth":100,"trailingComma":"all"},"commitlint":{"extends":["@commitlint/config-conventional"]},"lint-staged":{"*.{ts,json,md}":["eslint --fix","prettier --write"]},"dependencies":{"@nestjs/class-transformer":"^0.4.0","@nestjs/class-validator":"^0.13.4","@nestjs/common":"^10.3.10","@nestjs/config":"^3.2.3","@nestjs/core":"^10.3.10","@nestjs/platform-express":"^10.3.10","@nestjs/swagger":"^7.4.0","@tresdoce-nestjs-toolkit/archetype":"^1.1.2","@tresdoce-nestjs-toolkit/core":"^1.4.1","@tresdoce-nestjs-toolkit/dynamoose":"^1.1.3","@tresdoce-nestjs-toolkit/filters":"^1.1.2","@tresdoce-nestjs-toolkit/http-client":"^1.2.3","@tresdoce-nestjs-toolkit/response-parser":"^1.2.2","@vendia/serverless-express":"^4.12.6","aws-lambda":"^1.0.7","aws-serverless-express":"^3.4.0","class-transformer":"^0.5.1","class-validator":"^0.14.1","compression":"^1.7.4","cookie-parser":"^1.4.6","cross-env":"^7.0.3","express":"^4.21.0","helmet":"^7.1.0","reflect-metadata":"^0.2.2","rimraf":"^5.0.9","rxjs":"^7.8.1","serverless-offline":"^13.8.0","swagger-ui-express":"^5.0.1","uuid":"^10.0.0","webpack-merge":"^6.0.1"},"devDependencies":{"@commitlint/cli":"^17.8.1","@commitlint/config-conventional":"^17.8.1","@nestjs/cli":"^10.4.2","@nestjs/schematics":"^10.1.3","@nestjs/testing":"^10.3.10","@tresdoce-nestjs-toolkit/commons":"^1.2.2","@tresdoce-nestjs-toolkit/test-utils":"^2.1.2","@types/compression":"^1.7.5","@types/cookie-parser":"^1.4.7","@types/express":"^4.17.21","@types/jest":"^29.5.12","@types/node":"^22.0.0","@types/supertest":"^6.0.2","@typescript-eslint/eslint-plugin":"^7.17.0","@typescript-eslint/parser":"^7.17.0","dotenv":"^16.4.5","eslint":"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-prettier":"^5.2.1","husky":"^9.1.3","jest":"^29.7.0","lint-staged":"^15.2.7","prettier":"^3.3.3","serverless-plugin-common-excludes":"^4.0.0","serverless-plugin-include-dependencies":"^6.1.1","serverless-webpack":"^5.14.2","standard-version":"^9.5.0","supertest":"^7.0.0","ts-jest":"^29.2.3","ts-loader":"^9.5.1","ts-node":"^10.9.2","tsconfig-paths":"^4.2.0","typescript":"^4.9.5","webpack":"^5.94.0","webpack-cli":"^5.1.4","webpack-node-externals":"^3.0.0"},"packageManager":"yarn@1.22.22+sha512.a6b2f7906b721bba3d67d4aff083df04dad64c399707841b7acf00f6b133b7ac24255f2652fa22ae3534329dc6180534e98d17432037ff6fd140556e2bb3137e"}');

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getEnvFilePath = void 0;
const environments = {
    test: '.env.test',
    dev: '.env.dev',
    qa: '.env.qa',
    stg: '.env.stg',
    production: '.env',
};
const getEnvFilePath = () => environments[`${process.env.NODE_ENV}`];
exports.getEnvFilePath = getEnvFilePath;


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validationSchema = void 0;
const joi_1 = __importDefault(__webpack_require__(21));
const core_1 = __webpack_require__(17);
exports.validationSchema = (0, core_1.validateSchemaForApp)({
    TEST_KEY: joi_1.default.string().required(),
    STAR_WARS_API_URL: joi_1.default.string().required(),
    STAR_WARS_API_URL_LIVENNESS: joi_1.default.string().required(),
});


/***/ }),
/* 21 */
/***/ ((module) => {

module.exports = require("joi");

/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarwarsModule = void 0;
const common_1 = __webpack_require__(3);
const starwars_people_controller_1 = __webpack_require__(23);
const starwars_people_service_1 = __webpack_require__(24);
let StarwarsModule = class StarwarsModule {
};
StarwarsModule = __decorate([
    (0, common_1.Module)({
        controllers: [starwars_people_controller_1.StarwarsPeopleController],
        providers: [starwars_people_service_1.StarwarsPeopleService],
    })
], StarwarsModule);
exports.StarwarsModule = StarwarsModule;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarwarsPeopleController = void 0;
const openapi = __webpack_require__(13);
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(13);
const starwars_people_service_1 = __webpack_require__(24);
let StarwarsPeopleController = class StarwarsPeopleController {
    constructor(starwarsPeopleService) {
        this.starwarsPeopleService = starwarsPeopleService;
    }
    findAll() {
        return this.starwarsPeopleService.findAll();
    }
    findOne(id) {
        return this.starwarsPeopleService.findOne(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [(__webpack_require__(25).TranslatePeopleResponseDto)] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StarwarsPeopleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: (__webpack_require__(25).TranslatePeopleResponseDto) }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StarwarsPeopleController.prototype, "findOne", null);
StarwarsPeopleController = __decorate([
    (0, swagger_1.ApiTags)('StarWars'),
    (0, common_1.Controller)('starwars-people'),
    __metadata("design:paramtypes", [starwars_people_service_1.StarwarsPeopleService])
], StarwarsPeopleController);
exports.StarwarsPeopleController = StarwarsPeopleController;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StarwarsPeopleService = void 0;
const common_1 = __webpack_require__(3);
const http_client_1 = __webpack_require__(9);
const config_1 = __webpack_require__(15);
const utils_service_1 = __webpack_require__(11);
let StarwarsPeopleService = class StarwarsPeopleService {
    constructor(appConfig, utilService, httpClient) {
        this.appConfig = appConfig;
        this.utilService = utilService;
        this.httpClient = httpClient;
    }
    async findAll() {
        const { data } = await this.httpClient.get(encodeURI(`${this.appConfig.services.starWarsAPI.url}/people`));
        return data.results.map((row) => this.utilService.mapAndTranslatePeople(row));
    }
    async findOne(id) {
        try {
            const { data } = await this.httpClient.get(encodeURI(`${this.appConfig.services.starWarsAPI.url}/people/${id}`));
            return this.utilService.mapAndTranslatePeople(data);
        }
        catch (error) {
            throw new common_1.HttpException(error.response.data.detail, error.response.status);
        }
    }
};
StarwarsPeopleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.config.KEY)),
    __metadata("design:paramtypes", [void 0, utils_service_1.UtilsService,
        http_client_1.HttpClientService])
], StarwarsPeopleService);
exports.StarwarsPeopleService = StarwarsPeopleService;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslatePeopleResponseDto = exports.PeopleResponseDto = void 0;
const openapi = __webpack_require__(13);
const audit_dto_1 = __webpack_require__(26);
class PeopleResponseDto extends audit_dto_1.AuditFieldsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, birth_year: { required: true, type: () => String }, eye_color: { required: true, type: () => String }, gender: { required: true, type: () => String }, hair_color: { required: true, type: () => String }, height: { required: true, type: () => String }, mass: { required: true, type: () => String }, skin_color: { required: true, type: () => String }, homeworld: { required: true, type: () => String }, films: { required: true, type: () => [String] }, species: { required: true, type: () => [String] }, starships: { required: true, type: () => [String] }, vehicles: { required: true, type: () => [String] }, url: { required: true, type: () => String } };
    }
}
exports.PeopleResponseDto = PeopleResponseDto;
class TranslatePeopleResponseDto extends audit_dto_1.TranslateAuditFieldsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String }, anio_nacimiento: { required: true, type: () => String }, color_ojos: { required: true, type: () => String }, genero: { required: true, type: () => String }, color_cabello: { required: true, type: () => String }, estatura: { required: true, type: () => String }, peso: { required: true, type: () => String }, color_piel: { required: true, type: () => String }, planeta_origen: { required: true, type: () => String }, peliculas: { required: true, type: () => [String] }, especies: { required: true, type: () => [String] }, naves_estelares: { required: true, type: () => [String] }, vehiculos: { required: true, type: () => [String] }, url: { required: true, type: () => String } };
    }
}
exports.TranslatePeopleResponseDto = TranslatePeopleResponseDto;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TranslateAuditFieldsDto = exports.AuditFieldsDto = void 0;
const openapi = __webpack_require__(13);
class AuditFieldsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { created: { required: true, type: () => String }, edited: { required: true, type: () => String } };
    }
}
exports.AuditFieldsDto = AuditFieldsDto;
class TranslateAuditFieldsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { fecha_creacion: { required: true, type: () => String }, fecha_modificacion: { required: true, type: () => String } };
    }
}
exports.TranslateAuditFieldsDto = TranslateAuditFieldsDto;


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonasModule = void 0;
const common_1 = __webpack_require__(3);
const dynamoose_1 = __webpack_require__(7);
const persona_schema_1 = __webpack_require__(28);
const personas_controller_1 = __webpack_require__(30);
const personas_service_1 = __webpack_require__(31);
let PersonasModule = class PersonasModule {
};
PersonasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            dynamoose_1.DynamooseModule.forFeature([
                {
                    name: 'Persona',
                    schema: persona_schema_1.PersonaSchema,
                    options: { tableName: 'persona' },
                },
            ]),
        ],
        controllers: [personas_controller_1.PersonasController],
        providers: [personas_service_1.PersonasService],
    })
], PersonasModule);
exports.PersonasModule = PersonasModule;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonaSchema = void 0;
const dynamoose_1 = __webpack_require__(29);
exports.PersonaSchema = new dynamoose_1.Schema({
    id: {
        type: String,
        hashKey: true,
    },
    nombres: {
        type: String,
        required: true,
    },
    apellidoPaterno: {
        type: String,
        required: true,
    },
    apellidoMaterno: {
        type: String,
        required: true,
    },
    correoElectronico: {
        type: String,
        required: true,
    },
    celular: {
        type: String,
        required: true,
    },
    fechaNacimiento: {
        type: Date,
        default: Date.now,
    },
    direccion: {
        type: String,
        required: true,
    },
    esActivo: {
        type: Boolean,
        required: true,
        default: true,
    },
}, {
    timestamps: true,
});


/***/ }),
/* 29 */
/***/ ((module) => {

module.exports = require("dynamoose");

/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonasController = void 0;
const openapi = __webpack_require__(13);
const common_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(13);
const personas_service_1 = __webpack_require__(31);
const dto_1 = __webpack_require__(33);
let PersonasController = class PersonasController {
    constructor(personasService) {
        this.personasService = personasService;
    }
    findAll() {
        return this.personasService.findAll();
    }
    findOne(params) {
        return this.personasService.findOne({
            id: params.id,
        });
    }
    create(persona) {
        return this.personasService.create(persona);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtiene el listado de personas registradas',
        description: 'Devuelve un arreglo de todas las personas registradas en la Base de Datos',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Devuelve un arreglo de todas las personas',
        type: dto_1.ResponsePersonaDto,
        isArray: true,
    }),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [(__webpack_require__(33).ResponsePersonaDto)] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonasController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Obtiene una persona específica',
        description: 'Devuelve el registro de la persona según el identificador enviado',
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Devuelve el registro de la persona buscada',
        type: dto_1.ResponsePersonaDto,
        isArray: false,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Persona no encontrada',
        type: Object,
        isArray: false,
    }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'Identificador único de la persona' }),
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: (__webpack_require__(33).ResponsePersonaDto) }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FindOnePersonaParams]),
    __metadata("design:returntype", void 0)
], PersonasController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear nueva persona',
        description: 'Genera un nuevo registro de una persona en Dynamoo',
    }),
    (0, swagger_1.ApiBody)({
        type: dto_1.CreatePersonaDto,
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'Retorna la entidad creada',
        type: dto_1.ResponsePersonaDto,
        isArray: false,
    }),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: (__webpack_require__(33).ResponsePersonaDto) }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePersonaDto]),
    __metadata("design:returntype", void 0)
], PersonasController.prototype, "create", null);
PersonasController = __decorate([
    (0, swagger_1.ApiTags)('Personas'),
    (0, common_1.Controller)('personas'),
    __metadata("design:paramtypes", [personas_service_1.PersonasService])
], PersonasController);
exports.PersonasController = PersonasController;


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonasService = void 0;
const common_1 = __webpack_require__(3);
const dynamoose_1 = __webpack_require__(7);
const uuid_1 = __webpack_require__(32);
let PersonasService = class PersonasService {
    constructor(personaModel) {
        this.personaModel = personaModel;
    }
    async create(persona) {
        const fechaNacimiento = new Date(persona?.fechaNacimiento);
        return this.personaModel.create({ id: (0, uuid_1.v4)(), ...persona, fechaNacimiento });
    }
    async findAll() {
        return this.personaModel.scan().exec();
    }
    async findOne(key) {
        const response = await this.personaModel.get(key);
        if (!response) {
            throw new common_1.NotFoundException(`La persona con id: ${key.id} no existe`);
        }
        return response;
    }
};
PersonasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, dynamoose_1.InjectModel)('Persona')),
    __metadata("design:paramtypes", [Object])
], PersonasService);
exports.PersonasService = PersonasService;


/***/ }),
/* 32 */
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindOnePersonaParams = exports.ResponsePersonaDto = exports.CreatePersonaDto = void 0;
const class_validator_1 = __webpack_require__(34);
const swagger_1 = __webpack_require__(13);
const class_validator_2 = __webpack_require__(35);
class CreatePersonaDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.MinLength)(2),
    (0, class_validator_2.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ example: 'Christian Carmelo', description: 'Nombres de la persona' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "nombres", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.MinLength)(2),
    (0, class_validator_2.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ example: 'Calderon', description: 'Apellido paterno de la persona' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "apellidoPaterno", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.MinLength)(2),
    (0, class_validator_2.MaxLength)(100),
    (0, swagger_1.ApiProperty)({ example: 'Castro', description: 'Apellido materno de la persona' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "apellidoMaterno", void 0);
__decorate([
    (0, class_validator_2.IsEmail)(),
    (0, class_validator_2.MinLength)(5),
    (0, class_validator_2.MaxLength)(250),
    (0, swagger_1.ApiProperty)({
        example: 'ccalderon9411@gmail.com',
        description: 'Correo electrónico de contacto',
    }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "correoElectronico", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.MinLength)(2),
    (0, class_validator_2.MaxLength)(50),
    (0, swagger_1.ApiProperty)({ example: '956044447', description: 'Número celular de contacto' }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "celular", void 0);
__decorate([
    (0, class_validator_2.IsOptional)(),
    (0, class_validator_2.Matches)(/^\d{4}-\d{2}-\d{2}$/, {
        message: 'Fecha de nacimiento debe estar en formato YYYY-MM-DD',
    }),
    (0, swagger_1.ApiProperty)({
        example: '1994-05-28',
        description: 'Fecha de nacimiento en formato YYYY-MM-DD',
        required: false,
    }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_2.MinLength)(10),
    (0, swagger_1.ApiProperty)({
        example: 'Asoc. Costa Verde Mz 602 Lt 06 - Tacna',
        description: 'Dirección actual de residencia',
    }),
    __metadata("design:type", String)
], CreatePersonaDto.prototype, "direccion", void 0);
__decorate([
    (0, class_validator_2.IsBoolean)(),
    (0, class_validator_2.IsOptional)(),
    (0, swagger_1.ApiProperty)({
        example: 'true',
        description: 'true = registro activo | false = registro inactivo',
        required: false,
    }),
    __metadata("design:type", Boolean)
], CreatePersonaDto.prototype, "esActivo", void 0);
exports.CreatePersonaDto = CreatePersonaDto;
class ResponsePersonaDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '4fc87f46-2393-4161-adf1-bcf86ff432a3',
        description: 'Id único de registro de la persona',
    }),
    __metadata("design:type", String)
], ResponsePersonaDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Christian Carmelo', description: 'Nombres de la persona' }),
    __metadata("design:type", String)
], ResponsePersonaDto.prototype, "nombres", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Calderon', description: 'Apellido paterno de la persona' }),
    __metadata("design:type", String)
], ResponsePersonaDto.prototype, "apellidoPaterno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Castro', description: 'Apellido materno de la persona' }),
    __metadata("design:type", String)
], ResponsePersonaDto.prototype, "apellidoMaterno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ccalderon9411@gmail.com',
        description: 'Correo electrónico de contacto',
    }),
    __metadata("design:type", String)
], ResponsePersonaDto.prototype, "correoElectronico", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '956044447', description: 'Número celular de contacto' }),
    __metadata("design:type", String)
], ResponsePersonaDto.prototype, "celular", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '1994-05-28',
        description: 'Fecha de nacimiento en formato YYYY-MM-DD',
        required: false,
    }),
    __metadata("design:type", Date)
], ResponsePersonaDto.prototype, "fechaNacimiento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Asoc. Costa Verde Mz 602 Lt 06 - Tacna',
        description: 'Dirección actual de residencia',
    }),
    __metadata("design:type", String)
], ResponsePersonaDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'true',
        description: 'true = registro activo | false = registro inactivo',
        required: false,
    }),
    __metadata("design:type", Boolean)
], ResponsePersonaDto.prototype, "esActivo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-09-13T05:16:50.800Z',
        description: 'Campo de auditoria fecha de creación',
    }),
    __metadata("design:type", Number)
], ResponsePersonaDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2024-09-13T05:16:50.800Z',
        description: 'Campo de auditoria fecha de modificación',
    }),
    __metadata("design:type", Number)
], ResponsePersonaDto.prototype, "updatedAt", void 0);
exports.ResponsePersonaDto = ResponsePersonaDto;
class FindOnePersonaParams {
}
__decorate([
    (0, class_validator_2.IsUUID)('4'),
    __metadata("design:type", String)
], FindOnePersonaParams.prototype, "id", void 0);
exports.FindOnePersonaParams = FindOnePersonaParams;


/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = require("@nestjs/class-validator");

/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 37 */
/***/ ((module) => {

module.exports = require("express");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;