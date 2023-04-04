/* environment.dev.ts */

export const environment = {
    host: '',
    port: 3100,
    prefix: 'api'
};

// Environment for Azure
export const environments = {
    'azure': {
        host: 'localhost',
        port: 3100,
        prefix: 'api/azure'
    }
}