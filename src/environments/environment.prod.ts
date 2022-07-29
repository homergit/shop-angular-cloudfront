import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://mzkoi727xf.execute-api.eu-west-1.amazonaws.com/dev',
    order: 'https://mzkoi727xf.execute-api.eu-west-1.amazonaws.com/dev',
    import: 'https://vqbelur7h9.execute-api.eu-west-1.amazonaws.com/dev',
    bff: 'https://mzkoi727xf.execute-api.eu-west-1.amazonaws.com/dev',
    cart: 'https://mzkoi727xf.execute-api.eu-west-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: false,
    order: false,
    import: true,
    bff: true,
    cart: false,
  },
};
