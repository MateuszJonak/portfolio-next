/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: any;
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: any;
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: any;
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: any;
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  cardCollection?: Maybe<CardCollection>;
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
  interestCollection?: Maybe<InterestCollection>;
};


export type AssetLinkingCollectionsCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsCardCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsCvCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsInterestCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsInterestCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetLinkingCollectionsCardCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsCvCollectionOrder {
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  DateOfBirthAsc = 'dateOfBirth_ASC',
  DateOfBirthDesc = 'dateOfBirth_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsInterestCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/card) */
export type Card = Entry & {
  __typename?: 'Card';
  avatar?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  cv?: Maybe<Entry>;
  linkedFrom?: Maybe<CardLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/card) */
export type CardAvatarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/card) */
export type CardCvArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/card) */
export type CardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/card) */
export type CardNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/card) */
export type CardRoleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CardCollection = {
  __typename?: 'CardCollection';
  items: Array<Maybe<Card>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CardFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  cv_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role?: InputMaybe<Scalars['String']>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_exists?: InputMaybe<Scalars['Boolean']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role_not?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CardLinkingCollections = {
  __typename?: 'CardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CardOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type Cv = Entry & {
  __typename?: 'Cv';
  age?: Maybe<Scalars['Int']>;
  basic?: Maybe<Array<Maybe<Scalars['String']>>>;
  contentfulMetadata: ContentfulMetadata;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  educationCollection?: Maybe<CvEducationCollection>;
  expertise?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  interestsCollection?: Maybe<CvInterestsCollection>;
  knowledge?: Maybe<Array<Maybe<Scalars['String']>>>;
  languages?: Maybe<Array<Maybe<Scalars['String']>>>;
  linkedFrom?: Maybe<CvLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  photo?: Maybe<Asset>;
  professionalExperienceCollection?: Maybe<CvProfessionalExperienceCollection>;
  role?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<Scalars['String']>>>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvAgeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvBasicArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvDateOfBirthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvEducationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CvEducationCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EducationFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvExpertiseArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvGenderArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvInterestsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CvInterestsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InterestFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvKnowledgeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvLanguagesArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvPhotoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvProfessionalExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CvProfessionalExperienceCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExperienceFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvRoleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/cv) */
export type CvSkillsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type CvCollection = {
  __typename?: 'CvCollection';
  items: Array<Maybe<Cv>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type CvEducationCollection = {
  __typename?: 'CvEducationCollection';
  items: Array<Maybe<Education>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum CvEducationCollectionOrder {
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  SchoolAsc = 'school_ASC',
  SchoolDesc = 'school_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  StudyFieldAsc = 'studyField_ASC',
  StudyFieldDesc = 'studyField_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type CvFilter = {
  AND?: InputMaybe<Array<InputMaybe<CvFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CvFilter>>>;
  age?: InputMaybe<Scalars['Int']>;
  age_exists?: InputMaybe<Scalars['Boolean']>;
  age_gt?: InputMaybe<Scalars['Int']>;
  age_gte?: InputMaybe<Scalars['Int']>;
  age_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  age_lt?: InputMaybe<Scalars['Int']>;
  age_lte?: InputMaybe<Scalars['Int']>;
  age_not?: InputMaybe<Scalars['Int']>;
  age_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  basic_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  basic_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  basic_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  basic_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth_exists?: InputMaybe<Scalars['Boolean']>;
  dateOfBirth_gt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth_gte?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  dateOfBirth_lt?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth_lte?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth_not?: InputMaybe<Scalars['DateTime']>;
  dateOfBirth_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  education?: InputMaybe<CfEducationNestedFilter>;
  educationCollection_exists?: InputMaybe<Scalars['Boolean']>;
  expertise_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expertise_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expertise_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  expertise_exists?: InputMaybe<Scalars['Boolean']>;
  gender?: InputMaybe<Scalars['String']>;
  gender_contains?: InputMaybe<Scalars['String']>;
  gender_exists?: InputMaybe<Scalars['Boolean']>;
  gender_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender_not?: InputMaybe<Scalars['String']>;
  gender_not_contains?: InputMaybe<Scalars['String']>;
  gender_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  interests?: InputMaybe<CfInterestNestedFilter>;
  interestsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  knowledge_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  knowledge_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  knowledge_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  knowledge_exists?: InputMaybe<Scalars['Boolean']>;
  languages_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languages_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languages_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  languages_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  photo_exists?: InputMaybe<Scalars['Boolean']>;
  professionalExperience?: InputMaybe<CfExperienceNestedFilter>;
  professionalExperienceCollection_exists?: InputMaybe<Scalars['Boolean']>;
  role?: InputMaybe<Scalars['String']>;
  role_contains?: InputMaybe<Scalars['String']>;
  role_exists?: InputMaybe<Scalars['Boolean']>;
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  role_not?: InputMaybe<Scalars['String']>;
  role_not_contains?: InputMaybe<Scalars['String']>;
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skills_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skills_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skills_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  skills_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type CvInterestsCollection = {
  __typename?: 'CvInterestsCollection';
  items: Array<Maybe<Interest>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum CvInterestsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CvLinkingCollections = {
  __typename?: 'CvLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CvLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum CvOrder {
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  DateOfBirthAsc = 'dateOfBirth_ASC',
  DateOfBirthDesc = 'dateOfBirth_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CvProfessionalExperienceCollection = {
  __typename?: 'CvProfessionalExperienceCollection';
  items: Array<Maybe<Experience>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum CvProfessionalExperienceCollectionOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/education) */
export type Education = Entry & {
  __typename?: 'Education';
  contentfulMetadata: ContentfulMetadata;
  endDate?: Maybe<Scalars['DateTime']>;
  linkedFrom?: Maybe<EducationLinkingCollections>;
  school?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  studyField?: Maybe<Scalars['String']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/education) */
export type EducationEndDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/education) */
export type EducationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/education) */
export type EducationSchoolArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/education) */
export type EducationStartDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/education) */
export type EducationStudyFieldArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/education) */
export type EducationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type EducationCollection = {
  __typename?: 'EducationCollection';
  items: Array<Maybe<Education>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EducationFilter = {
  AND?: InputMaybe<Array<InputMaybe<EducationFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EducationFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']>;
  endDate_not?: InputMaybe<Scalars['DateTime']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  school?: InputMaybe<Scalars['String']>;
  school_contains?: InputMaybe<Scalars['String']>;
  school_exists?: InputMaybe<Scalars['Boolean']>;
  school_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  school_not?: InputMaybe<Scalars['String']>;
  school_not_contains?: InputMaybe<Scalars['String']>;
  school_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']>;
  startDate_not?: InputMaybe<Scalars['DateTime']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  studyField?: InputMaybe<Scalars['String']>;
  studyField_contains?: InputMaybe<Scalars['String']>;
  studyField_exists?: InputMaybe<Scalars['Boolean']>;
  studyField_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  studyField_not?: InputMaybe<Scalars['String']>;
  studyField_not_contains?: InputMaybe<Scalars['String']>;
  studyField_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EducationLinkingCollections = {
  __typename?: 'EducationLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type EducationLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EducationLinkingCollectionsCvCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type EducationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum EducationLinkingCollectionsCvCollectionOrder {
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  DateOfBirthAsc = 'dateOfBirth_ASC',
  DateOfBirthDesc = 'dateOfBirth_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum EducationOrder {
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  SchoolAsc = 'school_ASC',
  SchoolDesc = 'school_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  StudyFieldAsc = 'studyField_ASC',
  StudyFieldDesc = 'studyField_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/experience) */
export type Experience = Entry & {
  __typename?: 'Experience';
  company?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  linkedFrom?: Maybe<ExperienceLinkingCollections>;
  startDate?: Maybe<Scalars['DateTime']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/experience) */
export type ExperienceCompanyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/experience) */
export type ExperienceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/experience) */
export type ExperienceEndDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/experience) */
export type ExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/experience) */
export type ExperienceStartDateArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/experience) */
export type ExperienceTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ExperienceCollection = {
  __typename?: 'ExperienceCollection';
  items: Array<Maybe<Experience>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>;
  company?: InputMaybe<Scalars['String']>;
  company_contains?: InputMaybe<Scalars['String']>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  company_not?: InputMaybe<Scalars['String']>;
  company_not_contains?: InputMaybe<Scalars['String']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']>;
  endDate_not?: InputMaybe<Scalars['DateTime']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']>;
  startDate_not?: InputMaybe<Scalars['DateTime']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ExperienceLinkingCollections = {
  __typename?: 'ExperienceLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type ExperienceLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceLinkingCollectionsCvCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ExperienceLinkingCollectionsCvCollectionOrder {
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  DateOfBirthAsc = 'dateOfBirth_ASC',
  DateOfBirthDesc = 'dateOfBirth_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ExperienceOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/interest) */
export type Interest = Entry & {
  __typename?: 'Interest';
  contentfulMetadata: ContentfulMetadata;
  icon?: Maybe<Asset>;
  linkedFrom?: Maybe<InterestLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/interest) */
export type InterestIconArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/interest) */
export type InterestLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/interest) */
export type InterestNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type InterestCollection = {
  __typename?: 'InterestCollection';
  items: Array<Maybe<Interest>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type InterestFilter = {
  AND?: InputMaybe<Array<InputMaybe<InterestFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InterestFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type InterestLinkingCollections = {
  __typename?: 'InterestLinkingCollections';
  cvCollection?: Maybe<CvCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type InterestLinkingCollectionsCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<InterestLinkingCollectionsCvCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type InterestLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum InterestLinkingCollectionsCvCollectionOrder {
  AgeAsc = 'age_ASC',
  AgeDesc = 'age_DESC',
  DateOfBirthAsc = 'dateOfBirth_ASC',
  DateOfBirthDesc = 'dateOfBirth_DESC',
  GenderAsc = 'gender_ASC',
  GenderDesc = 'gender_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum InterestOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/pharmacyNetwork) */
export type PharmacyNetwork = Entry & {
  __typename?: 'PharmacyNetwork';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PharmacyNetworkLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/pharmacyNetwork) */
export type PharmacyNetworkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ymaqj8txsy4t/content_types/pharmacyNetwork) */
export type PharmacyNetworkNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type PharmacyNetworkCollection = {
  __typename?: 'PharmacyNetworkCollection';
  items: Array<Maybe<PharmacyNetwork>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PharmacyNetworkFilter = {
  AND?: InputMaybe<Array<InputMaybe<PharmacyNetworkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PharmacyNetworkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PharmacyNetworkLinkingCollections = {
  __typename?: 'PharmacyNetworkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PharmacyNetworkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PharmacyNetworkOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  card?: Maybe<Card>;
  cardCollection?: Maybe<CardCollection>;
  cv?: Maybe<Cv>;
  cvCollection?: Maybe<CvCollection>;
  education?: Maybe<Education>;
  educationCollection?: Maybe<EducationCollection>;
  entryCollection?: Maybe<EntryCollection>;
  experience?: Maybe<Experience>;
  experienceCollection?: Maybe<ExperienceCollection>;
  interest?: Maybe<Interest>;
  interestCollection?: Maybe<InterestCollection>;
  pharmacyNetwork?: Maybe<PharmacyNetwork>;
  pharmacyNetworkCollection?: Maybe<PharmacyNetworkCollection>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryCardArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CardFilter>;
};


export type QueryCvArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryCvCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<CvOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CvFilter>;
};


export type QueryEducationArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryEducationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EducationOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EducationFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryExperienceArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ExperienceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ExperienceFilter>;
};


export type QueryInterestArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryInterestCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<InterestOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InterestFilter>;
};


export type QueryPharmacyNetworkArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPharmacyNetworkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PharmacyNetworkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PharmacyNetworkFilter>;
};

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type CfEducationNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEducationNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEducationNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']>;
  endDate_not?: InputMaybe<Scalars['DateTime']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  school?: InputMaybe<Scalars['String']>;
  school_contains?: InputMaybe<Scalars['String']>;
  school_exists?: InputMaybe<Scalars['Boolean']>;
  school_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  school_not?: InputMaybe<Scalars['String']>;
  school_not_contains?: InputMaybe<Scalars['String']>;
  school_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']>;
  startDate_not?: InputMaybe<Scalars['DateTime']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  studyField?: InputMaybe<Scalars['String']>;
  studyField_contains?: InputMaybe<Scalars['String']>;
  studyField_exists?: InputMaybe<Scalars['Boolean']>;
  studyField_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  studyField_not?: InputMaybe<Scalars['String']>;
  studyField_not_contains?: InputMaybe<Scalars['String']>;
  studyField_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfExperienceNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfExperienceNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfExperienceNestedFilter>>>;
  company?: InputMaybe<Scalars['String']>;
  company_contains?: InputMaybe<Scalars['String']>;
  company_exists?: InputMaybe<Scalars['Boolean']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  company_not?: InputMaybe<Scalars['String']>;
  company_not_contains?: InputMaybe<Scalars['String']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']>;
  endDate_not?: InputMaybe<Scalars['DateTime']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']>;
  startDate_not?: InputMaybe<Scalars['DateTime']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfInterestNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfInterestNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfInterestNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  icon_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AssetFragment = { __typename?: 'Asset', title?: string | null, description?: string | null, contentType?: string | null, fileName?: string | null, size?: number | null, url?: string | null, width?: number | null, height?: number | null } & { ' $fragmentName'?: 'AssetFragment' };

export type CardFragment = { __typename?: 'Card', name?: string | null, role?: string | null, avatar?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null, cv?: { __typename?: 'Card', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Cv', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Education', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Experience', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'Interest', sys: { __typename?: 'Sys', id: string } } | { __typename?: 'PharmacyNetwork', sys: { __typename?: 'Sys', id: string } } | null } & { ' $fragmentName'?: 'CardFragment' };

export type GetCardsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetCardsQuery = { __typename?: 'Query', cardCollection?: { __typename?: 'CardCollection', items: Array<(
      { __typename?: 'Card' }
      & { ' $fragmentRefs'?: { 'CardFragment': CardFragment } }
    ) | null> } | null };

export type CvFragment = { __typename?: 'Cv', name?: string | null, role?: string | null, dateOfBirth?: any | null, age?: number | null, gender?: string | null, photo?: (
    { __typename?: 'Asset' }
    & { ' $fragmentRefs'?: { 'AssetFragment': AssetFragment } }
  ) | null } & { ' $fragmentName'?: 'CvFragment' };

export type GetCvQueryVariables = Exact<{
  id: Scalars['String'];
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type GetCvQuery = { __typename?: 'Query', cv?: (
    { __typename?: 'Cv' }
    & { ' $fragmentRefs'?: { 'CvFragment': CvFragment } }
  ) | null };

export const AssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Asset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"size"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]} as unknown as DocumentNode<AssetFragment, unknown>;
export const CardFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Card"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Card"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"cv"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},...AssetFragmentDoc.definitions]} as unknown as DocumentNode<CardFragment, unknown>;
export const CvFragmentDoc = {"kind":"Document", "definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CV"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Cv"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"photo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Asset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"dateOfBirth"}},{"kind":"Field","name":{"kind":"Name","value":"age"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}}]}},...AssetFragmentDoc.definitions]} as unknown as DocumentNode<CvFragment, unknown>;
export const GetCardsDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCards"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cardCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Card"}}]}}]}}]}},...CardFragmentDoc.definitions]} as unknown as DocumentNode<GetCardsQuery, GetCardsQueryVariables>;
export const GetCvDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCV"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cv"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CV"}}]}}]}},...CvFragmentDoc.definitions]} as unknown as DocumentNode<GetCvQuery, GetCvQueryVariables>;