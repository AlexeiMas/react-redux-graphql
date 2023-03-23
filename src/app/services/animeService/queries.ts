// import {gql} from "@apollo/client"
import {gql} from "../../graphql/__generated__"

export const GET_ANIME_PAGE = gql(`
  query GetAnimePage($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
      }
      media {
        id
        description
        title {
          english
          userPreferred
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`)

export const GET_DETAILS_BY_ID = gql(`
  query GetDetailsById($id: Int!) {
    Media (id: $id) {
      title {
        english
        userPreferred
      }
      description
      episodes
      duration
      genres
      averageScore
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      coverImage {
        extraLarge
      }
    }
  }
`)

export const SEARCH_BY_TITLE = gql(`
  query SearchByTitle($search: String!, $page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        hasNextPage
      }
      media(search: $search) {
        id
        title {
          english
          userPreferred
        }
        coverImage {
          extraLarge
        }
      }
    }
  }
`)