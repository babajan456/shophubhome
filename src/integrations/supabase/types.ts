export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      data: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      delivery_partners: {
        Row: {
          created_at: string
          current_latitude: number | null
          current_longitude: number | null
          email: string | null
          id: string
          is_active: boolean | null
          is_available: boolean | null
          license_number: string | null
          name: string
          phone: string
          rating: number | null
          total_deliveries: number | null
          updated_at: string
          user_id: string
          vehicle_number: string | null
          vehicle_type: string
        }
        Insert: {
          created_at?: string
          current_latitude?: number | null
          current_longitude?: number | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          is_available?: boolean | null
          license_number?: string | null
          name: string
          phone: string
          rating?: number | null
          total_deliveries?: number | null
          updated_at?: string
          user_id: string
          vehicle_number?: string | null
          vehicle_type: string
        }
        Update: {
          created_at?: string
          current_latitude?: number | null
          current_longitude?: number | null
          email?: string | null
          id?: string
          is_active?: boolean | null
          is_available?: boolean | null
          license_number?: string | null
          name?: string
          phone?: string
          rating?: number | null
          total_deliveries?: number | null
          updated_at?: string
          user_id?: string
          vehicle_number?: string | null
          vehicle_type?: string
        }
        Relationships: []
      }
      menu_categories: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          is_active: boolean | null
          name: string
          restaurant_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          restaurant_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          restaurant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "menu_categories_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      menu_items: {
        Row: {
          allergens: string[] | null
          calories: number | null
          category_id: string | null
          created_at: string
          customization_options: Json | null
          description: string | null
          id: string
          image_url: string | null
          images: string[] | null
          ingredients: string[] | null
          is_available: boolean | null
          is_featured: boolean | null
          is_gluten_free: boolean | null
          is_vegan: boolean | null
          is_vegetarian: boolean | null
          name: string
          nutritional_info: Json | null
          original_price: number | null
          preparation_time: number | null
          price: number
          restaurant_id: string
          spice_level: number | null
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          allergens?: string[] | null
          calories?: number | null
          category_id?: string | null
          created_at?: string
          customization_options?: Json | null
          description?: string | null
          id?: string
          image_url?: string | null
          images?: string[] | null
          ingredients?: string[] | null
          is_available?: boolean | null
          is_featured?: boolean | null
          is_gluten_free?: boolean | null
          is_vegan?: boolean | null
          is_vegetarian?: boolean | null
          name: string
          nutritional_info?: Json | null
          original_price?: number | null
          preparation_time?: number | null
          price: number
          restaurant_id: string
          spice_level?: number | null
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          allergens?: string[] | null
          calories?: number | null
          category_id?: string | null
          created_at?: string
          customization_options?: Json | null
          description?: string | null
          id?: string
          image_url?: string | null
          images?: string[] | null
          ingredients?: string[] | null
          is_available?: boolean | null
          is_featured?: boolean | null
          is_gluten_free?: boolean | null
          is_vegan?: boolean | null
          is_vegetarian?: boolean | null
          name?: string
          nutritional_info?: Json | null
          original_price?: number | null
          preparation_time?: number | null
          price?: number
          restaurant_id?: string
          spice_level?: number | null
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "menu_items_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "menu_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "menu_items_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      order_tracking: {
        Row: {
          created_at: string
          id: string
          location_latitude: number | null
          location_longitude: number | null
          message: string | null
          order_id: string
          status: string
        }
        Insert: {
          created_at?: string
          id?: string
          location_latitude?: number | null
          location_longitude?: number | null
          message?: string | null
          order_id: string
          status: string
        }
        Update: {
          created_at?: string
          id?: string
          location_latitude?: number | null
          location_longitude?: number | null
          message?: string | null
          order_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "order_tracking_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          actual_delivery_time: string | null
          created_at: string
          delivery_address: Json | null
          delivery_fee: number | null
          delivery_instructions: string | null
          delivery_partner_id: string | null
          discount_amount: number | null
          estimated_delivery_time: string | null
          id: string
          items: Json
          order_type: string | null
          restaurant_id: string | null
          shipping_address: Json | null
          special_instructions: string | null
          status: string
          stripe_session_id: string | null
          tax_amount: number | null
          total: number
          updated_at: string
          user_id: string
        }
        Insert: {
          actual_delivery_time?: string | null
          created_at?: string
          delivery_address?: Json | null
          delivery_fee?: number | null
          delivery_instructions?: string | null
          delivery_partner_id?: string | null
          discount_amount?: number | null
          estimated_delivery_time?: string | null
          id?: string
          items: Json
          order_type?: string | null
          restaurant_id?: string | null
          shipping_address?: Json | null
          special_instructions?: string | null
          status?: string
          stripe_session_id?: string | null
          tax_amount?: number | null
          total: number
          updated_at?: string
          user_id: string
        }
        Update: {
          actual_delivery_time?: string | null
          created_at?: string
          delivery_address?: Json | null
          delivery_fee?: number | null
          delivery_instructions?: string | null
          delivery_partner_id?: string | null
          discount_amount?: number | null
          estimated_delivery_time?: string | null
          id?: string
          items?: Json
          order_type?: string | null
          restaurant_id?: string | null
          shipping_address?: Json | null
          special_instructions?: string | null
          status?: string
          stripe_session_id?: string | null
          tax_amount?: number | null
          total?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_delivery_partner_id_fkey"
            columns: ["delivery_partner_id"]
            isOneToOne: false
            referencedRelation: "delivery_partners"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          email: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      restaurant_reviews: {
        Row: {
          comment: string | null
          created_at: string
          delivery_rating: number | null
          food_quality_rating: number | null
          helpful_count: number | null
          id: string
          is_verified: boolean | null
          order_id: string | null
          rating: number
          restaurant_id: string
          title: string | null
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          delivery_rating?: number | null
          food_quality_rating?: number | null
          helpful_count?: number | null
          id?: string
          is_verified?: boolean | null
          order_id?: string | null
          rating: number
          restaurant_id: string
          title?: string | null
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          delivery_rating?: number | null
          food_quality_rating?: number | null
          helpful_count?: number | null
          id?: string
          is_verified?: boolean | null
          order_id?: string | null
          rating?: number
          restaurant_id?: string
          title?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "restaurant_reviews_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "restaurant_reviews_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      restaurants: {
        Row: {
          address: string
          banner_url: string | null
          city: string
          closing_time: string | null
          created_at: string
          cuisine_type: string[] | null
          delivery_fee: number | null
          delivery_time_max: number | null
          delivery_time_min: number | null
          description: string | null
          email: string | null
          id: string
          image_url: string | null
          is_accepting_orders: boolean | null
          is_active: boolean | null
          latitude: number | null
          longitude: number | null
          minimum_order: number | null
          name: string
          opening_time: string | null
          owner_id: string
          phone: string | null
          postal_code: string
          rating: number | null
          review_count: number | null
          slug: string
          state: string
          updated_at: string
        }
        Insert: {
          address: string
          banner_url?: string | null
          city: string
          closing_time?: string | null
          created_at?: string
          cuisine_type?: string[] | null
          delivery_fee?: number | null
          delivery_time_max?: number | null
          delivery_time_min?: number | null
          description?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_accepting_orders?: boolean | null
          is_active?: boolean | null
          latitude?: number | null
          longitude?: number | null
          minimum_order?: number | null
          name: string
          opening_time?: string | null
          owner_id: string
          phone?: string | null
          postal_code: string
          rating?: number | null
          review_count?: number | null
          slug: string
          state: string
          updated_at?: string
        }
        Update: {
          address?: string
          banner_url?: string | null
          city?: string
          closing_time?: string | null
          created_at?: string
          cuisine_type?: string[] | null
          delivery_fee?: number | null
          delivery_time_max?: number | null
          delivery_time_min?: number | null
          description?: string | null
          email?: string | null
          id?: string
          image_url?: string | null
          is_accepting_orders?: boolean | null
          is_active?: boolean | null
          latitude?: number | null
          longitude?: number | null
          minimum_order?: number | null
          name?: string
          opening_time?: string | null
          owner_id?: string
          phone?: string | null
          postal_code?: string
          rating?: number | null
          review_count?: number | null
          slug?: string
          state?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
