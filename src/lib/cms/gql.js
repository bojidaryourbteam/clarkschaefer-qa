import { sleep } from '@lib/utils';
import compress from 'gql-compress';

/**
 * @class GQL
 * This class is responsible for executing GraphQL queries.
 *
 * Usage:
 *    async() => await GQL.fetch(query, variables)
 */

export default class GQL {
  /**
   * Returns Contentful ENV
   *
   * @returns {String}
   */
  static env(previewEnv) {
    return previewEnv || process.env.NEXT_PUBLIC_CONTENTFUL_ENV || 'master';
  }

  /**
   * Returns sleep interval where defined, to throttle the
   * number of requests made against the API so we don't get rate limited
   *
   * @returns {Integer}
   */
  static sleepInt() {
    return process.env.CONTENTFUL_SLEEP_INTERVAL_MS || undefined;
  }

  /**
   * Returns the Contentful Space ID
   *
   * @returns {String}
   */
  static spaceId() {
    return process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  }

  /**
   * Returns the URL for the API endpoint
   *
   * @returns {String}
   */
  static endpoint() {
    return `https://graphql.contentful.com/content/v1/spaces/${GQL.spaceId()}/environments/${GQL.env()}`;
  }

  /**
   * Returns request headers, including auth token for Contentful's API
   *
   * @param {Bool} preview
   * @return {Object}
   */
  static headers(preview) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        preview
          ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
      }`,
    };
  }

  /**
   * Returns HTTP response from API, following an optional sleep interval
   *
   * @param {String} query
   * @param {Object} variables
   * @param {Bool} preview
   * @return {Promise}
   */
  static async fetch(query, variables, preview = false, previewEnv) {
    const compressedQuery = compress(query);
    await sleep(GQL.sleepInt());
    return fetch(GQL.endpoint(previewEnv), {
      method: 'POST',
      headers: GQL.headers(preview),
      body: JSON.stringify({ query: compressedQuery, variables }),
    }).then((response) => response.json());
  }
}
