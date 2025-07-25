import { z } from 'zod';

/**
 * Enum for Permission Types
 */
export enum PermissionTypes {
  /**
   * Type for Prompt Permissions
   */
  PROMPTS = 'PROMPTS',
  /**
   * Type for Bookmark Permissions
   */
  BOOKMARKS = 'BOOKMARKS',
  /**
   * Type for Agent Permissions
   */
  AGENTS = 'AGENTS',
  /**
   * Type for Memory Permissions
   */
  MEMORIES = 'MEMORIES',
  /**
   * Type for Multi-Conversation Permissions
   */
  MULTI_CONVO = 'MULTI_CONVO',
  /**
   * Type for Temporary Chat
   */
  TEMPORARY_CHAT = 'TEMPORARY_CHAT',
  /**
   * Type for using the "Run Code" LC Code Interpreter API feature
   */
  RUN_CODE = 'RUN_CODE',
  /**
   * Type for using the "Web Search" feature
   */
  WEB_SEARCH = 'WEB_SEARCH',
  /**
   * Type for using the "File Search" feature
   */
  FILE_SEARCH = 'FILE_SEARCH',
}

/**
 * Enum for Role-Based Access Control Constants
 */
export enum Permissions {
  SHARED_GLOBAL = 'SHARED_GLOBAL',
  USE = 'USE',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  READ = 'READ',
  READ_AUTHOR = 'READ_AUTHOR',
  SHARE = 'SHARE',
  /** Can disable if desired */
  OPT_OUT = 'OPT_OUT',
}

export const promptPermissionsSchema = z.object({
  [Permissions.SHARED_GLOBAL]: z.boolean().default(false),
  [Permissions.USE]: z.boolean().default(true),
  [Permissions.CREATE]: z.boolean().default(true),
  // [Permissions.SHARE]: z.boolean().default(false),
});
export type TPromptPermissions = z.infer<typeof promptPermissionsSchema>;

export const bookmarkPermissionsSchema = z.object({
  [Permissions.USE]: z.boolean().default(true),
});
export type TBookmarkPermissions = z.infer<typeof bookmarkPermissionsSchema>;

export const memoryPermissionsSchema = z.object({
  [Permissions.USE]: z.boolean().default(true),
  [Permissions.CREATE]: z.boolean().default(true),
  [Permissions.UPDATE]: z.boolean().default(true),
  [Permissions.READ]: z.boolean().default(true),
  [Permissions.OPT_OUT]: z.boolean().default(true),
});
export type TMemoryPermissions = z.infer<typeof memoryPermissionsSchema>;

export const agentPermissionsSchema = z.object({
  [Permissions.SHARED_GLOBAL]: z.boolean().default(false),
  [Permissions.USE]: z.boolean().default(true),
  [Permissions.CREATE]: z.boolean().default(true),
  // [Permissions.SHARE]: z.boolean().default(false),
});
export type TAgentPermissions = z.infer<typeof agentPermissionsSchema>;

export const multiConvoPermissionsSchema = z.object({
  [Permissions.USE]: z.boolean().default(true),
});
export type TMultiConvoPermissions = z.infer<typeof multiConvoPermissionsSchema>;

export const temporaryChatPermissionsSchema = z.object({
  [Permissions.USE]: z.boolean().default(true),
});
export type TTemporaryChatPermissions = z.infer<typeof temporaryChatPermissionsSchema>;

export const runCodePermissionsSchema = z.object({
  [Permissions.USE]: z.boolean().default(true),
});
export type TRunCodePermissions = z.infer<typeof runCodePermissionsSchema>;

export const webSearchPermissionsSchema = z.object({
  [Permissions.USE]: z.boolean().default(true),
});
export type TWebSearchPermissions = z.infer<typeof webSearchPermissionsSchema>;

export const fileSearchPermissionsSchema = z.object({
  [Permissions.USE]: z.boolean().default(true),
});
export type TFileSearchPermissions = z.infer<typeof fileSearchPermissionsSchema>;

// Define a single permissions schema that holds all permission types.
export const permissionsSchema = z.object({
  [PermissionTypes.PROMPTS]: promptPermissionsSchema,
  [PermissionTypes.BOOKMARKS]: bookmarkPermissionsSchema,
  [PermissionTypes.MEMORIES]: memoryPermissionsSchema,
  [PermissionTypes.AGENTS]: agentPermissionsSchema,
  [PermissionTypes.MULTI_CONVO]: multiConvoPermissionsSchema,
  [PermissionTypes.TEMPORARY_CHAT]: temporaryChatPermissionsSchema,
  [PermissionTypes.RUN_CODE]: runCodePermissionsSchema,
  [PermissionTypes.WEB_SEARCH]: webSearchPermissionsSchema,
  [PermissionTypes.FILE_SEARCH]: fileSearchPermissionsSchema,
});
